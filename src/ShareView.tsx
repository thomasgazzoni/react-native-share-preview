import React, {Component, createRef, PropsWithChildren, ReactNode} from 'react';
import {View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {captureRef, CaptureOptions} from 'react-native-view-shot';
import ShareBar from './ShareBar';
import {ShareTypes} from './constants';
import Loading from './Loading';

const {
  set,
  cond,
  startClock,
  stopClock,
  clockRunning,
  block,
  timing,
  Value,
  Clock,
} = Animated;

function runTiming(
  clock: Animated.Clock,
  fromValue: number,
  toValue: number,
  duration: number,
) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.cubic),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, fromValue),
      set(state.frameTime, 0),
      set(config.toValue, toValue),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
}

interface IProps {
  /**
   * Background color of the share page
   *
   * The Default color is #dddddd
   */
  outerBgColor: string;
  /**
   * Background color of the share content view
   *
   * The Default color is #f7f7f7
   */
  innerBgColor: string;
  /**
   * Custom bottom Share Bar component
   *
   * The Default component is share bar with text buttons
   */
  shareBar?: ReactNode;
  /**
   * Height of the bottom Share Bar
   *
   * The Default value is 140
   */
  shareBarHeight: number;
  /**
   * Capture options for ViewShot component
   *
   * (See: ViewShot CaptureOptions props)
   */
  captureOptions?: CaptureOptions;
  /**
   * Handle share cancel and page go back
   */
  onBackPress: () => void;
  /**
   * Handle user selected share option action
   * @param type User selected Share type (es: FaceBook, WeChat, etc)
   * @param screenshotUri Current View Screenshot image to share
   * @returns A promise that complete when the Native share implementation completes
   */
  onSharePress: (type: ShareTypes, screenshotUri: string) => Promise<any>;
  /**
   * Handle capture view Screenshot error
   * @param message Error Message
   */
  onCaptureError?: (message: string) => void;
}

interface IState {
  /**
   * Sharing loading state
   */
  isLoading: boolean;
}

export default class ShareView extends Component<
  PropsWithChildren<IProps>,
  IState
> {
  static defaultProps = {
    outerBgColor: '#dddddd',
    innerBgColor: '#f7f7f7',
    shareBarHeight: 140,
  };

  viewShotRef = createRef<View>();
  transShareBar: Animated.Node<number>;
  transContent: Animated.Node<number>;

  constructor(props: IProps) {
    super(props);
    this.transShareBar = runTiming(new Clock(), props.shareBarHeight, 0, 1000);
    this.transContent = runTiming(new Clock(), 1, 0.85, 1000);
    this.state = {
      isLoading: false,
    };
  }

  doCapture = async () => {
    const {captureOptions} = this.props;

    let imageUrl = '';
    if (this.viewShotRef.current) {
      imageUrl = await captureRef(this.viewShotRef.current, {
        format: 'png',
        quality: 1,
        result: 'tmpfile',
        snapshotContentContainer: false,
        ...(captureOptions || {}),
      });
    }
    return imageUrl;
  };

  handleLoading = (isLoading: boolean) => {
    this.setState({isLoading});
  };

  handleShare = async (type: ShareTypes) => {
    const {onCaptureError, onSharePress} = this.props;

    this.handleLoading(true);

    let imagePath = '';
    try {
      imagePath = await this.doCapture();
    } catch (error) {
      if (onCaptureError) {
        onCaptureError(error.message);
      }
    }

    const onFinish = () => {
      this.handleLoading(false);
    };

    if (!imagePath) {
      onFinish();
      return;
    }

    onSharePress(type, imagePath)
      .then(onFinish)
      .catch(onFinish);
  };

  render() {
    const {
      children,
      outerBgColor,
      innerBgColor,
      shareBar,
      shareBarHeight,
      onBackPress,
    } = this.props;
    const {isLoading} = this.state;

    return (
      <View style={{backgroundColor: outerBgColor, flex: 1}}>
        {isLoading && <Loading />}
        <Animated.ScrollView
          style={[
            {
              flex: 1,
              transform: [{scale: this.transContent}],
            },
          ]}
          scrollIndicatorInsets={{
            bottom: shareBarHeight,
          }}
          contentContainerStyle={{
            paddingBottom: shareBarHeight,
          }}>
          <View ref={this.viewShotRef} style={{backgroundColor: innerBgColor}}>
            {children}
          </View>
        </Animated.ScrollView>
        <Animated.View
          style={[
            {
              position: 'absolute',
              bottom: 0,
              width: '100%',
              minHeight: shareBarHeight,
              transform: [{translateY: this.transShareBar}],
            },
          ]}>
          {shareBar || (
            <ShareBar onCancel={onBackPress} onShared={this.handleShare} />
          )}
        </Animated.View>
      </View>
    );
  }
}
