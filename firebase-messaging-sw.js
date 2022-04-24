importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')


const firebaseConfig = {
    apiKey: "AIzaSyCG0TTTvGdaL-ZQrJR8Y0xQiF0V8QeCCHw",
    authDomain: "blog-2b4fb.firebaseapp.com",
    projectId: "blog-2b4fb",
    storageBucket: "blog-2b4fb.appspot.com",
    messagingSenderId: "384405163649",
    appId: "1:384405163649:web:f8cf64e106409f5b34c780"
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
//
// messaging.onBackgroundMessage((payload) => {
//     console.log('Received background message ', payload);
//
//     const notificationTitle = payload.notification.title;
//
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });