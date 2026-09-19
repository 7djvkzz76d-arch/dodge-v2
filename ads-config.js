// Dodge V2 激励广告配置
// 真实广告位接入后，将 DODGE_ADS_READY 改为 true，并在这里接入你的广告平台 SDK 回调。
// 当前默认 false：不会伪造广告奖励。
window.DODGE_ADS_READY = false;
window.DODGE_AD_CONFIG = { provider:'google-ad-manager', rewardedAdUnit:'' };
