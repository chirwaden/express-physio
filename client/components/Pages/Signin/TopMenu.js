import React from 'react';
import styled from 'styled-components';
import ButtonsGrey from '../../Styles/ButtonsGrey';


const TopMenu = styled.div`
    margin:20px;
    display: flex;
    justify-content: flex-end;

    span {
        padding: 10px 20px;
    }
`;

class Menu extends React.Component {
    
    render() {
        return (
            <TopMenu>
                <span>Don’t have an account?</span>
                <ButtonsGrey href="/signup">Get Started</ButtonsGrey>
            </TopMenu>
        );
    }   
}

export default Menu;
                        