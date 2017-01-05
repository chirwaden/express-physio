import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';

class ClientsPage extends React.Component {
    render() {
        return (
            <Main>
                <div className="PageLocation">
                    <div className="PageLocationWrapper">
                        <h1>Clients</h1>
                    </div>
                </div>
                <div className="PageWrapper">
                <p>Some Content</p>
                </div>
            </Main>
        
        );
    }   
}

export default ClientsPage;