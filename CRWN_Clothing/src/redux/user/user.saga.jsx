import { takeLatest, put, all, call } from 'redux-saga/effects';

import { googleSignInFailureAction,
    googleSignInStartAction,
    googleSignInSuccessAction,
    emailSignInFailureAction,
    emailSignInStartAction,
    emailSignInSuccessAction
    } from './user.reducer';

import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

export function* signInWithGoogle() {
    try {
        const auth = yield getAuth();
        const provider = new GoogleAuthProvider();
        const { user } = yield signInWithPopup(auth, provider);
        yield put(googleSignInSuccessAction(user));
      } catch (error) {
        put(googleSignInFailureAction(error.message))
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
        yield put(emailSignInSuccessAction(user));
    } catch (error) {
        yield put(emailSignInFailureAction(error.message));
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(
        emailSignInStartAction,
        signInWithEmail
    )
}


