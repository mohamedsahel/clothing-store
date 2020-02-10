import React from "react";
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import {
        SignupContainer,
        Title
        }
        from "./signup.styles";


class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
      event.preventDefault();

      const {password, confirmPassword} = this.state;
      const { signUpStart } = this.props
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
      
      await signUpStart(this.state)
  
    }



    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignupContainer>
                <Title>I do not have an account</Title>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={this.handleChange}
                    label='Display Name'
                    required/>

                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required/>

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required/>

                    <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required/>
                    
                    <CustomButton type="submit"> SIGN UP </CustomButton>
                </form>
            </SignupContainer>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp);