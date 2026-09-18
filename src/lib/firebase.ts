import { initializeApp, getApps, getApp } from "firebase/app";
import { getMessaging, isSupported, Messaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDLRSWYVur4Q7o94Ba-QyymL6Xg5mxb79M",
  authDomain: "jagmarg-mindbrightly.firebaseapp.com",
  projectId: "jagmarg-mindbrightly",
  storageBucket: "jagmarg-mindbrightly.firebasestorage.app",
  messagingSenderId: "1097056561445",
  appId: "1:1097056561445:web:3efaceac48496a6ac652cc",
  measurementId: "G-63CE3S87N9"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Messaging is only supported in browsers
let messaging: Promise<Messaging | null>;

if (typeof window !== "undefined") {
  messaging = isSupported().then(supported => {
    if (supported) {
      return getMessaging(app);
    }
    return null;
  });
}

export { app, messaging };
