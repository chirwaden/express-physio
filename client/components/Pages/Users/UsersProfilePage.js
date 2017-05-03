import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Table from '../../Styles/Tables';
import Checkbox from '../../Styles/Checkbox';
import ModalR from '../../Styles/Modal';


const UserWrapper = styled.div`
display: flex;
width: 100%;
height: auto;
flex-direction: column;
`;

const Attribute = styled.div`
display: flex;
margin: 16px;
flex-direction: column;
`;

const Label = styled.div`

display: flex;
font-weight: bold;
margin: 16px 0px 8px 0px;
`;

const Detail = styled.div`
order: 1;
display: flex;
font-wight: bold;
margin: 0px 0px 16px 0px;
flex-direction: row;
`;

const Image = styled.div`
display: flex;
height: 48px;
width: 48px;
border-radius: 50%;
background-color: red;
color: #FFFFFF;
align-items: center;
justify-content: center;
`;

const Link = styled.span`
display: flex;
margin-left: 32px;

 a {    
        display: flex;
        align-items: center;
        color: #007EE5;
        text-decoration: none;

        &:hover {
            color: #1778AE;
            text-decoration: underline;
        }
    }
    
`;


class UserProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            
            <Main>
                <NavigationBar />
                <div className="PageLocation">
                    <div className="PageLocationWrapper">
                        <h1>Account Settings</h1>
                    </div>
                </div>

                <div className="PageWrapper">
                    <h4>Profile</h4>

                    <UserWrapper>
                    
                        <Attribute>
                            <Label>Profile Image</Label>
                            <Detail>
                                <Image>PN</Image>
                                <Link>
                                    <a href="#" type="button" value="Open" onClick={() => this.openModal()}>Change</a>
                                    
                                    <ModalR>
                                 
                                            <h1>Title</h1>
                                            <p>Profile Image</p>
                                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            
                                    </ModalR>

                                </Link>
                            </Detail>
                        </Attribute>
                        
                        
                        <Attribute>
                            <Label>Name</Label>
                            <Detail>
                                <span>Paul Nicholson</span>
                                <Link>
                                    <a href="#" type="button" value="Open" onClick={() => this.openModal()}>Change Name</a>

                                    <ModalR>
                                        <div>
                                            <h1>Title</h1>
                                            <p>Change Name Modal</p>
                                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                        </div>
                                    </ModalR>

                                </Link>
                            </Detail>
                        </Attribute>
                        
                        <Attribute>
                            <Label>Email Address</Label>
                            <Detail>
                                <span>paulNicholson@htomail.com</span>
                                <Link>
                                    <a href="#">Change Email</a>
                                </Link>
                            </Detail>
                        </Attribute>
                    
                        <Attribute>
                            <Label>Password</Label>
                            <Detail>
                                <span>************</span>
                                <Link>
                                    <a href="#">Change Password</a>
                                </Link>
                            </Detail>
                        </Attribute>
                    </UserWrapper>

                </div>
            </Main>
        
        );
    }   
}


export default UserProfilePage;

