import userActionTypes from "./user.types";


// sign in actions
export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSigninStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signinSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signinFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})


// sign up actions
export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = snapShot => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: snapShot
})

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})


// sign out actions
export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})




export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})