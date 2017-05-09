import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? '#0073D2' : '#FFFFFF'};
  color: ${(props) => props.primary ? '#FFFFFF' : '#0073D2'}; 
  border: ${(props) => props.primary ? 'none' : '1px solid #0073D2'}; 

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
      background: ${(props) => props.primary ? '#00569E' : '#F0F8FE'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#00569E'};
      border: ${(props) => props.primary ? 'none' : '1px solid #0073D2'};
  }

    &:focus {
      background: ${(props) => props.primary ? '#00569E' : '#FFFFFF'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#00569E'};
  }

    &:active {
      background: ${(props) => props.primary ? '#003A69' : '#E2F1FE'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#003A69'};
  }
`;

export default Button;