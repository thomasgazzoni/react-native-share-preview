import {createAppContainer, NavigationScreenComponent} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SceneInterpolatorProps} from 'react-navigation-stack/lib/typescript/types';
import {Animated, Easing} from 'react-native';
import HomePage from './pages/HomePage';
import TextPage from './pages/ShareText/TextPage';
import TextSharePage from './pages/ShareText/TextSharePage';
import WebViewPage from './pages/ShareWebView/WebViewPage';
import WebViewSharePage from './pages/ShareWebView/WebViewSharePage';

const makeScene = (screen: NavigationScreenComponent<any, any>) => ({screen});

const StackNavigator = createStackNavigator(
  {
    Home: makeScene(HomePage),
    // Example with Text
    TextPage: makeScene(TextPage),
    TextSharePage: makeScene(TextSharePage),
    // Example with WebView
    WebViewPage: makeScene(WebViewPage),
    WebViewSharePage: makeScene(WebViewSharePage),
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(5)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: (sceneProps: SceneInterpolatorProps) => {
        const {layout, position, scene} = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0],
        });

        return {transform: [{translateX}]};
      },
    }),
  },
);

export default createAppContainer(StackNavigator);
