export const APP_STORE_URL = 'https://apps.apple.com/ng/app/zoltraa/id6760113092';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.zoltraa.app';

export const getDeviceStoreUrl = () => {
  if (typeof navigator === 'undefined') {
    return APP_STORE_URL;
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  const isAndroid = userAgent.includes('android');
  const isAppleDevice =
    /iphone|ipad|ipod|mac/.test(userAgent) || /iphone|ipad|ipod|mac/.test(platform);

  if (isAndroid) {
    return GOOGLE_PLAY_URL;
  }

  if (isAppleDevice) {
    return APP_STORE_URL;
  }

  return APP_STORE_URL;
};

export const openDeviceStore = () => {
  window.open(getDeviceStoreUrl(), '_blank', 'noopener,noreferrer');
};
