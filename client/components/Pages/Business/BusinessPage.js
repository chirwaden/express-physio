import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';

class BusinessPage extends React.Component {
    render() {
        return (
            <Main>
                <div className="PageLocation">
                    <div className="PageLocationWrapper">
                        <h1>Business Page</h1>
                    </div>
                </div>
                <div className="PageWrapper">
                    <p>Some Content Here</p>
                </div>
            </Main>
        
        );
    }   
}

export default BusinessPage;