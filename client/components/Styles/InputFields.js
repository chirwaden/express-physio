import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Input = styled.input`

    border: 1px solid #9E9E9E;
    color: #47525D;
    font-size: 16px;
    font-weight: 300;
    padding: 15px;
    border-radius: 3px;
    width: 100%;
    margin: 7px 0px 32px 0px;
    outline:none;

    &:focus{
        outline:none;
        border: 2px solid #007EE5;
        border-radius: 3px;
        padding: 14px;
    }

`;

export default Input;