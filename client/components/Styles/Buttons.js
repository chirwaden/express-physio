import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? '#52bad5' : '#FFFFFF'};
  color: ${(props) => props.primary ? '#FFFFFF' : '#52bad5'}; 
  border: ${(props) => props.primary ? 'none' : 'none'}; 

  font-size: 1em;
  font-weight: 300;
  padding: 0px 1em;
  border-radius: 3px;
  min-width: 130px;
  max-height: 40px;
  height: 40px;
  text-align: center;
  cursor:pointer;
  box-shadow: none;
  margin: 2px 0px 0px 0px;
  outline: none;
  transition: opacity .2s, margin .2s, background .15s ease-in-out;
  
  &:hover {
      background: ${(props) => props.primary ? '#2C9AB7' : '#E9F5F8'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#52bad5'};
      border: ${(props) => props.primary ? 'none' : 'none'};
  }

    &:focus {
      background: ${(props) => props.primary ? '#52BAD5' : '#FFFFFF'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#52bad5'};
  }

    &:active {
      background: ${(props) => props.primary ? '#48A5BD' : '#E9F5F8'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#52bad5'};
      border: ${(props) => props.primary ? 'none' : '2px solid #DFF0F4'};
  }
`;

export default Button;