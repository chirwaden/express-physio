import React from 'react';
import styled from 'styled-components';


const TopMenu = styled.div`
    margin:20px;
    display: flex;
    justify-content: flex-end;

    span {
        padding: 10px 20px;
    }

    a {
        font-size: 1em;
        font-weight: 300;
        color: #47525D;
        padding: 0px 2em;
        border: 1px solid #47525D;
        border-radius: 40px;
        min-width: 138px;
        max-height: 40px;
        text-align: center;
        text-transform: Uppercase;
        line-height: 40px;
        cursor:pointer;
        transition: opacity .2s ease-in-out;
        text-decoration: none;
        
        &:hover {
            opacity: 0.5;
        }
    }
`;

class Menu extends React.Component {
    
    render() {
        return (
            <TopMenu>
                <span>Already have an account?</span>
                <a href="/signin">Sign In</a>
            </TopMenu>
        );
    }   
}

export default Menu;
                        