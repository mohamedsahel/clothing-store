import React, { useState } from "react";
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSigninStart, emailSigninStart } from "../../redux/user/user.actions";


import { 
        SigninContainer,
        Title,
        ButtonsContainer
        } from "./signin.styles";


const SignIn = ({ emailSigninStart, googleSigninStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSigninStart(email, password)
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }


    
    return (
        <SigninContainer>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                type="text" 
                name="email" 
                value={email} 
                handleChange={handleChange}
                label='email'
                required/>

                <FormInput 
                type="password" 
                name="password" 
                value={password} 
                handleChange={handleChange}
                label='password'
                required/>
                <ButtonsContainer>
                    <CustomButton type="submit"> SIGN IN </CustomButton>
                    <CustomButton type='button' onClick={ googleSigninStart } isGoogleSingIn> SIGN IN with google</CustomButton>
                </ButtonsContainer>
            </form>
        </SigninContainer>
    )

}


const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({email, password}))
})
  

export default connect(null, mapDispatchToProps)(SignIn);