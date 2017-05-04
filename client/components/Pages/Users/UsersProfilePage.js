import React from 'react';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import ProfileImageModal from '../Users/Components/ProfileImageModal';
import ProfileNameModal from '../Users/Components/ProfileNameModal';
import ProfileEmailModal from '../Users/Components/ProfileEmailModal';
import ProfilePasswordModal from '../Users/Components/ProfilePasswordModal';
import Button from '../../Styles/Buttons';


class UserProfilePage extends React.Component {

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
                        
                        <div>
                            <ProfileImageModal/>
                        </div>
                        
                        <div>
                            <ProfileNameModal/>
                        </div>
                    
                        <div>
                            <ProfileEmailModal/>
                        </div>
                        
                         <div>
                            <ProfilePasswordModal/>
                        </div>

                        <Button>Cancel</Button>
                        <Button primary>Save Settings</Button>

                </div>
            </Main>
        
        );
    }   
}


export default UserProfilePage;

