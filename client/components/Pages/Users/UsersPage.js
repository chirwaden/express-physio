import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUsers } from '../../../actions/index';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Table from '../../Styles/Tables';
import Checkbox from '../../Styles/Checkbox';

class UsersPage extends Component {
    constuctor(props){
      

    }

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
                <p>Some Content Here</p>
                    
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Organisation</th>
                            <th>State</th>
                            <th>Last Active</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                 
                     {this.props.list.map(function(user, i){
                            return (
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td></td>
                                    <td>{user.profile.firstName} {user.profile.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>[organisationName]</td>
                                    <td>[stateName]</td>
                                    <td>{user.updatedAt}</td>
                                </tr>
                            )
                    })
                     }
                   
                    </tbody>
                </Table>
                </div>
            </Main>
        
        );
    }   
}

function mapStateToProps(state){
    return{
        list: state.user.list
    }
}

export default connect(mapStateToProps, { listUsers })(UsersPage);

