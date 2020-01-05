export enum ShareTypes {
  Save = 'Save',
  WeChat = 'WeChat',
  Twitter = 'Twitter',
  Facebook = 'Facebook',
}

export const ShareColors: {[key in ShareTypes]: string} = {
  [ShareTypes.Save]: '#f57d00',
  [ShareTypes.WeChat]: '#09b83e',
  [ShareTypes.Twitter]: '#55acee',
  [ShareTypes.Facebook]: '#3b5999',
};

export const ShareIcons: {[key in ShareTypes]: string} = {
  [ShareTypes.Save]: 'disk',
  [ShareTypes.WeChat]: 'wechat',
  [ShareTypes.Twitter]: 'twitter',
  [ShareTypes.Facebook]: 'facebook',
};
