import React from 'react';

import './signin-and-signup.styles.scss';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SigninAndSignup = () => (
    <div className="signin-and-signup">
        <SignIn />
        <SignUp />
    </div>
)

export default SigninAndSignup;