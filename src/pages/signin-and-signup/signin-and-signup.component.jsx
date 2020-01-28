import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

//import './signin-and-signup.styles.scss';
import { SigninAndSignupContainer } from "./signin-and-signup.styles";

const SigninAndSignup = () => (
    <SigninAndSignupContainer>
        <SignIn />
        <SignUp />
    </SigninAndSignupContainer>
)

export default SigninAndSignup;