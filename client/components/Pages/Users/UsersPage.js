import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';

class UsersPage extends React.Component {
    render() {
        return (
            <Main>
                <div className="PageLocation">
                    <div className="PageLocationWrapper">
                        <h1>Users Page</h1>
                    </div>
                </div>
                <div className="PageWrapper">
                <p>Some Content Here</p>
                </div>
            </Main>
        
        );
    }   
}

export default UsersPage;