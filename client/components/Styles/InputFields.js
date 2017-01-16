import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Input = styled.input`

    border: 1px solid #9E9E9E;
    color: #47525D;
    font-size: 16px;
    font-weight: 300;
    padding: 14px;
    border-radius: 3px;
    width: 100%;
    margin: 7px 0px 30px 0px;
    transition: outline .2s, border .2s ease-in-out;

    &:focus{
        outline: 2px solid #4BBC73;
        border: 1px solid #4BBC73;
    }

`;

export default Input;