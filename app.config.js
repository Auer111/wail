import "dotenv/config";

export default {
  expo: {
    name: "Expo Firebase Starter",
    slug: "expo-firebase",
    privacy: "public",
    platforms: ["web", "ios", "android"],
    web: {
      favicon: "./assets/heart.png",
      assetBundlePatterns: ["**/*"],
    },
    version: "0.19.0",
    orientation: "portrait",
    icon: "./assets/whale.svg",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#F57C00",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
