import { takeLatest, put, all, call } from 'redux-saga/effects';

import { signInFailureAction,
    googleSignInStartAction,
    signInSuccessAction,
    
    emailSignInStartAction,
    
    checkUserSessionAction,
    } from './user.reducer';

import {  getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import {getDoc} from "firebase/firestore"
import {getCurrentUser, createUserProfileDocument} from "../../firebase/firebase.utils"

export function* signInWithGoogle() {
    try {
        const auth = yield getAuth();
        const provider = new GoogleAuthProvider();
        const { user } = yield signInWithPopup(auth, provider);
        const userRef = yield call(createUserProfileDocument, user);
        
        const userSnapshot = yield getDoc(userRef);
        
        yield put(signInSuccessAction({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
      } catch (error) {
        put(signInFailureAction(error))
      }
}

export function* onGoogleSignInStart() {
    yield takeLatest(
        googleSignInStartAction,
        signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const auth = yield getAuth();
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield getDoc(userRef)
        yield put(signInSuccessAction({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(
        emailSignInStartAction,
        signInWithEmail
    )
}

export function* isUserAuthenticated(){
    try{
       
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield put(signInSuccessAction(userAuth))

    }catch(error){
        yield put(signInFailureAction(error.message))
    }
}
export function* onCheckUserSession(){
    yield takeLatest(
        checkUserSessionAction,
        isUserAuthenticated
    )
    
}


