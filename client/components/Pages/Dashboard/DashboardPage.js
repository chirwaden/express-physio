import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';

class DashboardPage extends React.Component {
    render() {
        return (
            <Main>
                <NavigationBar />
                <div className="PageLocation">
                    {/*<div className="PageLocationWrapper">
                        
                        <h1>Dashboard</h1>
                    </div>*/}
                </div>
                <div className="PageWrapper">
                <p>Some Content Here</p>
                </div>
            </Main>
        
        );
    }   
}

export default DashboardPage;