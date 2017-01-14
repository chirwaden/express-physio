import React from 'react';
import SigninForm from './SigninForm';
import TopMenu from './TopMenu';
import styled from 'styled-components';

const Wrapper = styled.div`

    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > SigninForm {
        flex: 1;
        display: flex;
        justify-content: center;
        height: 100vh;
        background-color: grey;
    }

    > .leftBanner {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        height: 100vh;
        background-color: grey;
        max-width: 25%;
    }
    > .mainBody {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100vh;
        max-width: 100%;
    }


`;

class SigninPage extends React.Component {
    render() {
        return (

            // <Main>
               
                    <Wrapper>
                        <div className="leftBanner"></div>
                        <div className="mainBody">
                            <TopMenu />
                            <SigninForm />
                        </div>
                    </Wrapper>
              
            // </Main>
        
        );
    }   
}

export default SigninPage;