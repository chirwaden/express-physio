import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Input = styled.input`

    font-family: 'Roboto', sans-serif;
    border: 1px solid #c9c9c9;
    color: #686E7A;
    font-size: 16px;
    font-weight: 300;
    padding: 12px 15px;
    border-radius: 3px;
    width: 100%;
    margin: 7px 0px 24px 0px;
    outline:none;
    height: 40px;

    &:focus{
        outline:none;
        border: 2px solid #007EE5;
        border-radius: 3px;
        padding: 11px 14px;
    }

    &:focus:hover{
        outline:none;
        border: 2px solid #007EE5;
        border-radius: 3px;
        padding: 11px 14px;
    }

    &:active{
        outline:none;
        border: 2px solid #007EE5;
        border-radius: 3px;
        padding: 11px 14px;
    }

    &:hover{
        outline:none;
        border: 2px solid #a6a6a6;
        border-radius: 3px;
        padding: 11px 14px;
    }

`;

export default Input;