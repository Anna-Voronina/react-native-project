import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBsWe996CH3lJQWAEaX8St__GtPvFpt5o",
  authDomain: "social-network-abb0c.firebaseapp.com",
  projectId: "social-network-abb0c",
  storageBucket: "social-network-abb0c.appspot.com",
  messagingSenderId: "153530102701",
  appId: "1:153530102701:web:4edd14e3eb327aa62a6724",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
