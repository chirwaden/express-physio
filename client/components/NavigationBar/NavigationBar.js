import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';
import NavButton from './NavButton';
import AccountDropdown from './NavDropDown';


class Navigation extends React.Component {
    render() {
        return (
        <Wrapper>       
             <NavWrapper>
                <div className="navigationBar_bar">
                    <NavButton route="/Dashboard" title="dashboard"/>
                    <NavButton route="/clients" title="clients"/>
                    <NavButton route="/users" title="users"/>
                    <NavButton route="/business" title="business"/>
                </div>

                <div className="navigationBar_bar username">
                    <div className="navigationBar ">
                        <AccountDropdown />
                        {/*<a onClick={() => alert('click')} href="#">Jane Appleseed</a>*/}
                    </div>
                </div>
            </NavWrapper>
        </Wrapper>
        
        );
    }   
}

export default Navigation;