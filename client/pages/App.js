import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Dashboard from '../pages/Dashboard/DashboardPage';
import styled from 'styled-components';


const Wrapper = styled.div`
    > @import {url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,800')};
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: row;
    height: 100vh;
    font-family: 'Open Sans', sans-serif
    color: #47525D
`;

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