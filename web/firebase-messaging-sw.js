importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyD1DvvMUU7iziTzAQ2IPz6Jt2-8SI1JVv0",
    authDomain: "pappagfirebase.firebaseapp.com",
    projectId: "pappagfirebase",
    storageBucket: "pappagfirebase.appspot.com",
    messagingSenderId: "110959431111",
    appId: "1:110959431111:web:741bd932354d59d3f91de2",
    measurementId: "G-3NEKT4E1X0",
    databaseURL: "https://admin.squareboxpizzas.com",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
