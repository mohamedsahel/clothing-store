import React from 'react';

import { 
        GroupContainer,
        Input,
        FormInputLabel
        }
        from "./form-input.styles";


const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <Input onChange = {handleChange} {...otherProps} />
            {
                label ?
                (<FormInputLabel isShrink = {otherProps.value.length}>
                    { label }
                </FormInputLabel>)
                : null

            }

        </GroupContainer>
    )
}

export default FormInput;