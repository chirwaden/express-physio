import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const ButtonGrey = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? '#47525D' : 'white'};
  color: ${(props) => props.primary ? 'white' : '#47525D'}; 

  font-size: 1em;
  font-weight: 300;
  padding: 0px 2em;
  border: 1px solid #47525D;
  border-radius: 40px;
  min-width: 138px;
  max-height: 40px;
  text-align: center;
  text-transform: Uppercase;
  line-height: 40px;
  cursor:pointer;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.2);
  margin: 2px 0px 0px 0px;
  outline: none;
  transition: opacity .2s, margin .2s, box-shadow .2s, background .2s ease-in-out;
  text-decoration: none;
  
  &:hover {
      background: ${(props) => props.primary ? '#47525D' : 'white'};
      color: ${(props) => props.primary ? 'white' : '#47525D'};
      margin: 2px 0px 0px 0px;
      opacity: 0.5;
  }

  &:active {
      background: ${(props) => props.primary ? '#47525D' : 'white'};
      color: ${(props) => props.primary ? 'white' : '#47525D'};
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
      margin: 0px 0px 2px 0px;
      opacity: 0.5;
      
  }
`;

export default ButtonGrey;