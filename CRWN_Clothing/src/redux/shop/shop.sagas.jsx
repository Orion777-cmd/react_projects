import {takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import { getShopDataFailureAction, getShopDataSuccessAction , getShopDataStartAction} from './shop.reducer';
import {  collection, getDocs } from 'firebase/firestore';
import {firestore} from "../../firebase/firebase.utils"
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchShopDataAsync(){
  
    try{
        const collectionRef = collection(firestore, 'collections');
        const snapshot = yield getDocs(collectionRef);
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(getShopDataSuccessAction(collectionsMap))
    }catch(error){
        yield put(getShopDataFailureAction(error.message))
    }
     
}
export function* fetchShopDataStart(){
    yield takeLatest(
     getShopDataStartAction,
     fetchShopDataAsync)
}