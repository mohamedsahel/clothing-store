import { takeLatest, call, all, put } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure
 } from "./shop.actions";

import shopActionsTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}



export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}