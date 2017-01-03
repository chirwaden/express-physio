import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: calc(100% - 160px);
    padding: 20px;
`;

const MainWrapper = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    max-width: 1400px;
`;

class ClientsPage extends React.Component {
    render() {
        return (
            <Main>
                <MainWrapper>
                <h1>Clients Page</h1>
                </MainWrapper>
            </Main>
        
        );
    }   
}

export default ClientsPage;