import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyApQE4EGidPdoWxi82Yhc2Inh0kmlsZ0oI",
    authDomain: "crwn-db-43174.firebaseapp.com",
    databaseURL: "https://crwn-db-43174.firebaseio.com",
    projectId: "crwn-db-43174",
    storageBucket: "crwn-db-43174.appspot.com",
    messagingSenderId: "259919891762",
    appId: "1:259919891762:web:6eab2011331e0667269b2b",
    measurementId: "G-C8SJMVVDBC"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log(`error creating user : ${error.message}`)
      }

    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;