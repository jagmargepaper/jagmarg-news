importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDLRSWYVur4Q7o94Ba-QyymL6Xg5mxb79M",
  authDomain: "jagmarg-mindbrightly.firebaseapp.com",
  projectId: "jagmarg-mindbrightly",
  storageBucket: "jagmarg-mindbrightly.firebasestorage.app",
  messagingSenderId: "1097056561445",
  appId: "1:1097056561445:web:3efaceac48496a6ac652cc"
};

// Initialize the Firebase app in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'Jagmarg News Alert';
  const notificationOptions = {
    body: payload.notification?.body || 'New Breaking News Update',
    icon: '/logo.png',
    data: payload.data,
    badge: '/favicon.ico',
    tag: payload.notification?.tag || 'jagmarg-news',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
