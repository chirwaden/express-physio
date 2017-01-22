import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? '#007EE5' : 'white'};
  color: ${(props) => props.primary ? 'white' : '#007EE5'}; 

  font-size: 1em;
  font-weight: 300;
  padding: 0px 2em;
  border: 1px solid #007EE5;
  border-radius: 40px;
  min-width: 138px;
  max-height: 40px;
  text-align: center;
  text-transform: Uppercase;
  line-height: 40px;
  cursor:pointer;
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.1);
  margin: 2px 0px 0px 0px;
  outline: none;
  transition: opacity .2s, margin .2s, box-shadow .2s, background .2s ease-in-out;
  
  &:hover {
    /{/*background: ${(props) => props.primary ? '#006DC7' : 'white'};*/}
      color: ${(props) => props.primary ? 'white' : '#006DC7'};
      opacity: 0.8;

  }

  &:active {
      background: ${(props) => props.primary ? '#006DC7' : 'white'};
      color: ${(props) => props.primary ? 'white' : '#006DC7'};
      box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.1);
      opacity: 1;
      
  }
`;

export default Button;