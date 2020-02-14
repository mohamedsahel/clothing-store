import { takeLatest, put, call, all } from 'redux-saga/effects';

import { clearCart } from "./cart.actions";

import userActionTypes  from "../user/user.types";


export function* clearCartItems() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartItems)
}



export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}