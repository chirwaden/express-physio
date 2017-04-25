import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUsers } from '../../../actions/index';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Table from '../../Styles/Tables';

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
<<<<<<< HEAD
                <p>{this.props.listUsers().list}</p>
=======
                <p>Some Content Here</p>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="label-text"></span>
                                </label>
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Organisation</th>
                            <th>State</th>
                            <th>Last Active</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                    </tbody>
                </Table>
        
>>>>>>> 52402e3897df0eb446d17e150a8d13381881a006
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