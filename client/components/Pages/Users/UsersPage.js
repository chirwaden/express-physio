import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUsers } from '../../../actions/index';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';

class UsersPage extends Component {
    componentWillMount(){
        this.props.listUsers();
    }

    render() {
        return (
            
            <Main>
                <NavigationBar />
                <div className="PageLocation">
                    <div className="PageLocationWrapper">
                        <h1>Users</h1>
                    </div>
                </div>
                <div className="PageWrapper">
                <p>{this.props.listUsers().list}</p>
                </div>
            </Main>
        
        );
    }   
}

function mapStateToProps(state){
    return{
        errorMessage: state.error,
        list: state.user.profile
    }
}

export default connect(mapStateToProps, { listUsers })(UsersPage);