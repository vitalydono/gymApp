import firebase from "firebase/app";
import auth from "firebase/auth";
import storage from "firebase/storage";

firebase.initializeApp({

    apiKey: "AIzaSyBM688iixvxwzkdzjW5KVCnp1Wr2pEBMiM",
    authDomain: "gym-app-84ad5.firebaseapp.com",
    projectId: "gym-app-84ad5",
    databaseURL: "https://gym-app-84ad5-default-rtdb.firebaseio.com",
    storageBucket: "gym-app-84ad5.appspot.com",
    messagingSenderId: "542195712360",
    appId: "1:542195712360:web:9080564c96443a594456dd"

});

export default {
    firebase
}