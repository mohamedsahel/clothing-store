import React from "react";
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSigninStart, emailSigninStart } from "../../redux/user/user.actions";


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

        const { emailSigninStart } = this.props;
        const { email, password } = this.state;

        emailSigninStart(email, password)
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        const { googleSigninStart } = this.props;
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
                        <CustomButton type='button' onClick={ googleSigninStart } isGoogleSingIn> SIGN IN with google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SigninContainer>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({email, password}))
})
  

export default connect(null, mapDispatchToProps)(SignIn);