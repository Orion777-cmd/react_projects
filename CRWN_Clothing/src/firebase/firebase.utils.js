import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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