const firebaseConfig = {
    apiKey: "AIzaSyBE6qGsxf5s0efsFgylxGM9fkKCwoCPrFg",
    authDomain: "music-player-1d33d.firebaseapp.com",
    databaseURL: "https://music-player-1d33d-default-rtdb.firebaseio.com",
    projectId: "music-player-1d33d",
    storageBucket: "music-player-1d33d.appspot.com",
    messagingSenderId: "443896631988",
    appId: "1:443896631988:web:93f9d5473c8c106fa7bde1",
    measurementId: "G-HM7NTV25DS"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('musically')