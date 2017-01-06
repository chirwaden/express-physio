import React from 'react';
// import NavigationBar from '../NavigationBar/NavigationBar';
import styled from 'styled-components';
import Wrapper from '../Styles/GlobalStyles';

class App extends React.Component {
    render() {
        return (
            
            <Wrapper>
             
                {this.props.children}
            </Wrapper>
            
        );
    }
}

export default App;