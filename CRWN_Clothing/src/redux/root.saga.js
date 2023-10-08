import { all } from 'redux-saga/effects';
import { fetchShopDataStart } from './shop/shop.sagas';
import { onGoogleSignInStart, onEmailSignInStart } from './user/user.saga';

export default function* rootSaga() {
  yield all([
    fetchShopDataStart(),
    onGoogleSignInStart(),
    onEmailSignInStart(),
  ]);
}