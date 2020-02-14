import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";
import { emailSigninStart,
        signinSuccess,
         signinFailure,
         signOutSuccess,
         signOutFailure,  
         signUpSuccess,
         signUpFailure   
         } from "./user.actions";

import { auth,
         googleProvider,
         createUserProfileDocument,
         getCurrentUser
        } from "../../firebase/firebase.utils";


export function* getSnapshotFromUserAuth( userAuth ){

    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        yield put(signinFailure(error))
    }
}

// signIn
export function* singinWithGoogle() {
    try{
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signinFailure(error))
    }
}

export function* signinWithEmail({ payload: {email, password} }){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signinFailure(error))
    }
}


export function* SignOutUser() {
    try{
        yield auth.signOut()
        yield put(signOutSuccess())

    }catch (error) {
        yield put(signOutFailure())
    }
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
        
    } catch (error) {
        yield put(signinFailure(error))
    }
}

// on action
export function* onGoogleSinginStart() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGN_IN_START,
        singinWithGoogle
    )
}

export function* onEmailSigninStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signinWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, SignOutUser)
}

export function* SignUpUser({ payload: {email, password, displayName} }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
          );

        yield call(createUserProfileDocument, (user, { displayName }));
        yield put(signUpSuccess())
        yield put(emailSigninStart({email, password}))

    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, SignUpUser)
}



export function* userSagas() {
    yield all([
        call(onGoogleSinginStart),
        call(onEmailSigninStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}