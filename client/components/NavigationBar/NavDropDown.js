import React from 'react';
import styled from 'styled-components';

import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

const Menu = styled.div`

.account{
    display:flex;
    flex-direction: row;
}

    .avatarInitials {
        display:flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        width: 32px;
        height: 32px;
        background-color: #47525D;
        border-radius: 16px;
        color: #FFFFFF;
        order: 1
    }
    .initials {
        display:flex;
        flex-direction: column;
        order: 2;
        margin-left: 20px;
    }

    a {
        color: #FFFFFF !important;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 300;
        padding: 20px;
        transition: opacity .2s ease-in-out;
    }
    a:hover  {
        text-decoration: none;
        color:#47525D;
    }
    .active {
        text-decoration: none;
        opacity: 0.5;
        color:#47525D;

    }

    .dropdown {
    display: flex;
    justify-content: flex-end;
    
    }

    .dropdown__content {
        display: none;
        position: absolute;
        background-color: white;
        border: 1px solid #D9D9D9; 
        border-radius: 3px;
        margin-top: 10px;
        min-width: 288px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1);
        top: 40px;
        opacity: 0;
        transition: opacity .2s ease-in-out;

        ul {
            padding: 0px;
            margin: 0px;
        }
        .border-top {
            border-top: 1px solid #D9D9D9;
        }

        .account {
            padding: 14px 20px;
        }
    }


    .dropdown--active .dropdown__content {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            opacity: 1;
            

            li {
                list-style: none;
                
                width:100%;

                span {

                }
                
                .avatarEmail {
                    color:#95989A;
                    font-size:12px;
                    width:100%;
                }

                a {
                    display: flex;
                    color: #47525D !important;
                    text-decoration: none;
                    text-transform: none;
                    padding: 14px 20px;
                    font-weight: 500;
                    width:100%;
                    background-color: #FFFFFF;
                    transition: opacity .2s, background-color .2s ease-in-out;
                }
                a:hover  {
                    text-decoration: none;
                    color: #47525D !important;
                    background-color: #eaeaea;
                    /*background-color: #F6F8FA;*/
                }
            }
    }
`;


var AccountDropdown = React.createClass({
    handleLinkClick: function () {
        this.refs.dropdown.hide();
    },

    render: function () {
        var user = this.props.user;
        return (
            <Menu>
                <Dropdown className="account-dropdown" ref="dropdown">
                    <DropdownTrigger>
                    {/*<img className="account-dropdown__avatar" src={user.avatar_url} />*/}<span className="account-dropdown__name">Jane Appleseed</span>
                    </DropdownTrigger>
                    <DropdownContent>
                        {/*<div className="account-dropdown__identity account-dropdown__segment">
                            Signed in as <strong>** user.name **</strong>
                        </div>*/}
                        <ul className="account-dropdown__quick-links account-dropdown__segment">
                            <li className="account">

                                    <div className="avatarInitials">JA</div>
                                    <div className="initials">
                                        <span>Jane Appleseed</span>
                                        <span className="avatarEmail">jane.appleseed@topphysio.com</span>
                                    </div>
                            
                            </li>
                        </ul>
                        <ul className="account-dropdown__quick-links">
                            <li className="account-dropdown__link border-top">
                                <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                                    Your profile Settings
                                </a>
                            </li>
                            <li className="account-dropdown__link">
                                <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                                    Team Settings
                                </a>
                            </li>
                        </ul>
                        <ul className="account-dropdown__management-links">
                            <li className="account-dropdown__link border-top">
                                <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </DropdownContent>
                </Dropdown>
            </Menu>
        );
    }
});

export default AccountDropdown;