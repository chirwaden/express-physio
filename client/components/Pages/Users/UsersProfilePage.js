import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/index';
import styled from 'styled-components';
import Main from '../PagesWrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import ProfileImageModal from '../Users/Components/ProfileImageModal';
import ProfileNameModal from '../Users/Components/ProfileNameModal';
import ProfileEmailModal from '../Users/Components/ProfileEmailModal';
import ProfilePasswordModal from '../Users/Components/ProfilePasswordModal';
import Button from '../../Styles/Buttons';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        const { params, getUser } = this.props;
        this.props.fetchUser(params.userId);
    }

    render() {
        return (
            
            <Main>
                <NavigationBar />
                <div className="PageLocation">
                    {/*<div className="PageLocationWrapper">
                        
                    </div>*/}
                </div>

                <div className="PageWrapper">
                    <h1>Account Settings</h1>
                    <h4>Profile</h4>
                        {
                            console.log(this.props.profile)
                        }
                        <div>
                            <ProfileImageModal/>
                        </div>
                        
                        <div>
                            <ProfileNameModal firstName={this.props.profile.firstName} lastName={this.props.profile.lastName}/>
                        </div>
                    
                        <div>
                            <ProfileEmailModal email={this.props.profile.email}/>
                        </div>
                        
                         <div>
                            <ProfilePasswordModal/>
                        </div>

                      

                </div>
            </Main>
        
        );
    }   
}


function mapStateToProps(state){
    return{
        profile: state.user.profile
    }
}

export default connect(mapStateToProps, { fetchUser })(UserProfilePage);
// export default UserProfilePage;  

