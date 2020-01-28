import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { 
        SigninContainer,
        Title,
        ButtonsContainer
        } from "./signin.styles";


class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })

        } catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <SigninContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required/>

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required/>
                    <ButtonsContainer>
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSingIn> SIGN IN with google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SigninContainer>
        )
    }
}


export default SignIn;