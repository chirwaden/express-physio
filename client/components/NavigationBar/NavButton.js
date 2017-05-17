import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';



const LinkWrapper = styled.div`
    padding:19px 0px;

    a {
        color: #48484A;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1em;
        font-weight: 300;
        padding: 19px 18px;
        border-bottom: 3px solid transparent;
    }
    a:hover  {
        text-decoration: none;
        transition: color .2s, border-bottom .2s ease-in-out;
        background-color: #e5e5e5;
        transition: background-color .2s ease-in-out;

    }
    .active, .active:hover {
        text-decoration: none;
        border-bottom: 3px solid #43cce2;
        transition: border-bottom .2s ease-in-out;
        
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