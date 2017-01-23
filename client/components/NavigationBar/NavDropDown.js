import React from 'react';
import styled from 'styled-components';

import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

const Menu = styled.div`



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
        opacity: 0.5;
    }
    .active {
        text-decoration: none;
        opacity: 0.5;
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
        box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.1);
        top: 40px;

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

            li {
                list-style: none;
                
                width:100%;

                span {
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
                    transition: opacity .2s ease-in-out;
                }
                a:hover  {
                    text-decoration: none;
                    opacity: 0.5;
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
                                    Jane Appleseed<br />
                                    <span>jane.appleseed@topphysio.com</span>
                            
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