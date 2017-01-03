import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    width: 100vw;
    background: #007EE5;
`;

const NavWrapper = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    height: 160px;
    width: 100vw;
    max-width: 1400px;
    
    > .navigationBar_bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        > .navigationBar {
          margin-top:20px;
        
            > a {
                color: #FFFFFF !important;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 1em;
                font-weight: 300;
                padding: 20px;
            }
            > a:hover {
                text-decoration: none;
                opacity: 0.7;
            }
        } 
    }

    > .navigationBar_username {
        justify-content: flex-end !important;
    }
`;




export default () => {
    return (
        <Wrapper>       
            <NavWrapper>
                <div className="navigationBar_bar">
                    <div className="navigationBar navigationBar_dasboard">
                        <Link to="/" href="#">Dashboard</Link>
                    </div>
                    <div className="navigationBar navigationBar_clients">
                        <Link to="/clients" href="#">Clients</Link>
                    </div>
                    <div className="navigationBar navigationBar_users">
                        <Link to="/users" href="#">Users</Link>
                    </div>
                    <div className="navigationBar navigationBar_business">
                        <Link to="/business" href="#">Business</Link>
                    </div>
                </div>

                <div className="navigationBar_bar navigationBar_username">
                    <div className="navigationBar ">
                        <a href="#">Jane Appleseed</a>
                    </div>
                </div>
            </NavWrapper>
        </Wrapper>

    );
}