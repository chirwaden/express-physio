import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? '#1E7BB2' : '#FFFFFF'};
  color: ${(props) => props.primary ? 'white' : '#1E7BB2'}; 

  font-size: 1em;
  font-weight: 300;
  padding: 0px 1em;
  border: 1px solid #1E7BB2;
  border-radius: 3px;
  min-width: 130px;
  max-height: 40px;
  text-align: center;
  /*text-transform: Uppercase;*/
  line-height: 40px;
  cursor:pointer;
  box-shadow: none;
  margin: 2px 0px 0px 0px;
  outline: none;
  transition: opacity .2s, margin .2s, box-shadow .2s, background .2s ease-in-out;
  
  &:hover {
      background: ${(props) => props.primary ? '#1E7BB2' : '#E9F2F8'};
      color: ${(props) => props.primary ? 'white' : '#135780'};
      background-color: ${(props) => props.primary ? '#135780' : '#F3F8FC'};
  }

  &:active {
      background: ${(props) => props.primary ? '#1E7BB2' : '#FFFFFF'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#1E7BB2'};
      box-shadow: 0px 4px 8px 0px rgba(24, 29, 38, 0.3)   ;
  }

    &:focus {
      background: ${(props) => props.primary ? '#1E7BB2' : '#FFFFFF'};
      color: ${(props) => props.primary ? '#FFFFFF' : '#1E7BB2'};
      box-shadow: 0px 4px 8px 0px rgba(24, 29, 38, 0.3);
  }
`;

export default Button;