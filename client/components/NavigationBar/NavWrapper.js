import styled from 'styled-components';

const NavWrapper = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    max-width: 1400px;

    > .navigationBar_bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 40px;
    }
    
    > .navigationBar_bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        > .navigationBar {
        
            > a {
                color: #FFFFFF !important;
                text-decoration: none;
           
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

    > .username {
        justify-content: flex-end;

        > .navigationBar {
            > a:hover  {
                text-decoration: none;
                opacity: 0.5;
                transition: opacity .2s ease-in-out;
            }
        }
    }
`;

export default NavWrapper;