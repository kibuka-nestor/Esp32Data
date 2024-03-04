// Configurer votre projet Firebase
const firebaseConfig = {
    
    apiKey: "AIzaSyBkeYhHZc9Na0UHjETg9GABYsDZFx1bLtQ",
    authDomain: "esp32-b9013.firebaseapp.com",
    databaseURL: "https://esp32-b9013-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "esp32-b9013",
    storageBucket: "esp32-b9013.appspot.com",
    messagingSenderId: "547189202345",
    appId: "1:547189202345:web:054bd09f1f7e66f7b538b8"

};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Obtenir une référence à la base de données
const database = firebase.database();