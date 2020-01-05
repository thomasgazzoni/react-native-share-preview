# react-native-share-preview

[![npm version](https://badge.fury.io/js/react-native-share-preview.svg)](https://badge.fury.io/js/react-native-share-preview)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Animated preview of a React Native page for sharing.

<p align="center">
<img src="/.github/images/example.gif" height="500" />
</p>

## Features

- Smooth animations by React Native Reanimated
- Customizable loading (Todo)
- Customizable ShareBar (Todo)

## Setup

This library is available on npm, install it with: `npm i react-native-share-preview` or `yarn add react-native-share-preview`.

Need also to install the related dependencies:
`npm i react-native-reanimated react-native-view-shot` or `yarn add react-native-reanimated react-native-view-shot`.

Recommend to use with RN > 0.60 so the auto-linking will handle all the dependencies

For RN < 0.60, you need to manually install `react-native-view-shot` and `react-native-reanimated`

## Usage

1.  Import react-native-share-preview:

```typescript
import {ShareView} from 'react-native-share-preview';
```

2.  Create a new page and wrap the content you want to share inside a ShareView:

```tsx
<ShareView
  onBackPress={handleBack}
  onSharePress={handleShareByType}
  onCaptureError={handleCaptureError}>
  <Text>Your Content</Text>
</ShareView>
```

3.  Handle the logic for the selected share option

```javascript
/**
 * Callback called with the user's selected share option
 */
const handleShareType = (type: ShareTypes, screenshotUri: string) => {
  return new Promise((resolve, _) => {
    // Call native implementation with your share logic
    // For example you can use react-native-share or your favorite share library
    return Share.open({type, filename: screenshotUri}).catch(err => {
      // Handle share error
      Alert.alert(err.message);
      throw err;
    });
  });
};

const handleCaptureError = (message: string) => {
  Alert.alert(message);
};
```

## A complete example

For a more complex example take a look at the `/example` directory.

## Available props

| Name           | Type           | Default      | Description                                |
| -------------- | -------------- | ------------ | ------------------------------------------ |
| outerBgColor   | string         | #dddddd      | Background color of the share page         |
| innerBgColor   | string         | #f7f7f7      | Background color of the share content view |
| shareBar       | ReactNode      | <ShareBar /> | Custom bottom Share Bar component          |
| shareBarHeight | number         | 140          | Height of the bottom Share Bar             |
| captureOptions | CaptureOptions | {}           | Capture options for ViewShot component     |
| onBackPress    | Function       | undefined    | Handle share cancel and page go back       |
| onSharePress   | Function       | undefined    | Handle user selected share option action   |
| onCaptureError | Function       | undefined    | Handle capture view Screenshot error       |

## Frequently Asked Questions

### Why on iOS i can't capture the whole screen?

This is problem with the `react-native-view-shot` library, the fix has not been merged yet and can be found in this PR [#209](https://github.com/gre/react-native-view-shot/pull/209/files).

## Acknowledgements

Thanks [@software-mansion](https://github.com/software-mansion/react-native-reanimated) for react-native-reanimated and [@gre](https://github.com/gre/react-native-view-shot) for react-native-view-shot!

Pull requests, feedbacks and suggestions are welcome!
