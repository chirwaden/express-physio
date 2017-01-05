import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Dashboard from '../Pages/Dashboard/DashboardPage';
import styled from 'styled-components';
import Wrapper from '../Styles/GlobalStyles';

class App extends React.Component {
    render() {
        return (
            
            <Wrapper>
                <NavigationBar />
                {this.props.children}
            </Wrapper>
            
        );
    }
}

export default App;