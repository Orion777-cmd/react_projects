import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc , collection} from 'firebase/firestore';


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


export const signInWithGoogle = async () => {
    try {
      const result= await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const user = result.user;
      console.log('user: ' ,user)
    } catch (error) {
      console.log('Error signing in with Google:', error);
    }
  };


  export const createUserProfileDocument = async (userAuth, displayName) => {
    if (!userAuth) return;
  
    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapshot = await getDoc(userRef);
  
    if (!snapshot.exists()) {
      const { email, photoURL } = userAuth;

      const createdAt = new Date().toISOString();
  
      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          
        });
      } catch (error) {
        console.log('Error creating user profile:', error.message);
      }
    }
  
  
    return userRef;
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  }

  export const addShopDataAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestore, collectionKey);
    
    console.log("collection ref: ", collectionRef)
    // const batch = writeBatch();
    objectsToAdd.forEach(async obj => {
      const newDocRef = doc(collectionRef);
      // console.log(newDocRef)
      await setDoc(newDocRef, obj);
    })

    // return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      console.log("accumulator: ", accumulator)
      return accumulator;
    }, {});

    
  }