 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCF8SVsjpb-x1f8PvaDVtSZ3MDZspJ4z_k",
    authDomain: "vue-phonebook-ba87c.firebaseapp.com",
    databaseURL: "https://vue-phonebook-ba87c.firebaseio.com",
    projectId: "vue-phonebook-ba87c",
    storageBucket: "vue-phonebook-ba87c.appspot.com",
    messagingSenderId: "412702642994"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true })
//  export firestore database
 export default firebaseApp.firestore()