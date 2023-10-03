import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAQu5KMYuSA7DmmZ4z1gnA8DurYppk0Zig",
  authDomain: "crwndb-d768e.firebaseapp.com",
  projectId: "crwndb-d768e",
  storageBucket: "crwndb-d768e.appspot.com",
  messagingSenderId: "173396154085",
  appId: "1:173396154085:web:3444febc1373340e74e60c",
  measurementId: "G-BR5F6Z58WX"
};

const app = initializeApp(config);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firestore = getFirestore(app);
export { auth, provider, signInWithPopup };

export const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log('Error signing in with Google:', error);
    }
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapshot = await getDoc(userRef);
    console.log('snapshot', snapshot.exists())
    if (!snapshot.exists()) {
      const { displayName, email, photoURL } = userAuth;
      const createdAt = new Date();
      console.log('name ', displayName, 'email ', email)
      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('Error creating user profile:', error.message);
      }
    }
  
    return userRef;
  };