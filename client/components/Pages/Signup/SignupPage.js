import React from 'react';
import SignupForm from './SignupForm';
import styled from 'styled-components';
// import Main from '../PagesWrapper';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100vh;

    > SignupForm {
        flex: 1;
        display: flex;
        justify-content: center;
        height: 100vh;
        background-color: grey;
    }

    > .leftBanner {
        flex: 1;
        display: flex;
        justify-content: left;
        height: 100vh;
        background-color: grey;
        max-width: 25%;
    }
    > .mainBody {
        flex: 1;
        display: flex;
        justify-content: center;
        height: 100vh;
        max-width: 100%;
    }


`;

class SignupPage extends React.Component {
    render() {
        return (

            // <Main>
                <div>
                    <Wrapper>
                        <div className="leftBanner"></div>
                        <div className="mainBody">
                            <SignupForm />
                        </div>
                    </Wrapper>
                </div>
            // </Main>
        
        );
    }   
}

export default SignupPage;