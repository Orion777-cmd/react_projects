import {all, call, takeLatest, put} from "redux-saga/effects"

import {clearCart} from "./cart.reducer"
import { signOutSuccessAction } from "../user/user.reducer"


export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(
        signOutSuccessAction,
        clearCartOnSignOut
    )
}
export function* cartSagas(){
    yield all([
        onSignOutSuccess(),
    ])

}