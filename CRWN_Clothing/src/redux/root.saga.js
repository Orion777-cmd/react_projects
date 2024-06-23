import { all, call } from 'redux-saga/effects';
import { fetchShopDataStart } from './shop/shop.sagas';
import { onGoogleSignInStart, onEmailSignInStart, onCheckUserSession, onSignOut, onSignUp, onSignUpSuccessAction } from './user/user.saga';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchShopDataStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(cartSagas),
    call(onSignUp),
    call(onSignUpSuccessAction)
  ]);
}