// Dodge Rush H5 Games Ads configuration.
// The Google Ad Placement API controls actual availability.
// Never grant a reward unless adViewed fires.
window.DODGE_ADS_READY = (typeof window.adBreak === 'function');
window.DODGE_AD_CONFIG = {
  provider:'google-h5-games',
  publisherId:'ca-pub-1697827837177436',
  rewardedPlacement:'revive-life',
  interstitialPlacement:'restart-game'
};
