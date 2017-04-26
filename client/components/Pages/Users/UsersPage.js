import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Table from '../../Styles/Tables';
import Checkbox from '../../Styles/Checkbox';

class UsersPage extends React.Component {
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
                            <td><span className="avatarInitials">YA</span></td>
                            <td>Yvonne Archer</td>
                            <td>YVonA@htomal.com</td>
                            <td>Standard</td>
                            <td>The Smart Physio</td>
                            <td>Active</td>
                            <td>9 months ago</td>
                            <td>Menu</td>
                        </tr>
                                               <tr>
                            <td>     
                                <Checkbox />
                            </td>
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
        
                </div>
            </Main>
        
        );
    }   
}

export default UsersPage;