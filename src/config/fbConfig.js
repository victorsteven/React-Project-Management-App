  import firebase from 'firebase/app';
  import 'firebase/firestore'
  import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuImAsrwrOpqPd3CNiowmkstbMSMukr0M",
    authDomain: "react-project-management-app.firebaseapp.com",
    databaseURL: "https://react-project-management-app.firebaseio.com",
    projectId: "react-project-management-app",
    storageBucket: "react-project-management-app.appspot.com",
    messagingSenderId: "459747472719"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;