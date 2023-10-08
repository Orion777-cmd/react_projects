import { all } from 'redux-saga/effects';
import { fetchShopDataStart } from './shop/shop.sagas';
import { onGoogleSignInStart, onEmailSignInStart, onCheckUserSession, onSignOut, onSignUp, onSignUpSuccessAction } from './user/user.saga';
import { cartSagas } from './cart/cart.sagas';


export default function* rootSaga() {
  yield all([
    fetchShopDataStart(),
    onGoogleSignInStart(),
    onEmailSignInStart(),
    onCheckUserSession(),
    onSignOut(),
    cartSagas(),
    onSignUp(),
    onSignUpSuccessAction()
  ]);
}