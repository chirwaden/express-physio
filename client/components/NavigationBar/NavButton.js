import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';



const LinkWrapper = styled.div`
    margin-top:20px;

    a {
        color: #FFFFFF !important;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 300;
        padding: 20px;
    }
    a:hover  {
        text-decoration: none;
        opacity: 0.5;
        transition: opacity .2s ease-in-out;
    }
    .active {
        text-decoration: none;
        opacity: 0.5;
        transition: opacity .2s ease-in-out;
    }
`;

class NavButton extends React.Component {
    
    render() {
        return (
            <LinkWrapper>
                <Link activeClassName="active" to={this.props.route} href="#">{this.props.title}</Link>
            </LinkWrapper>
        );
    }   
}

export default NavButton;