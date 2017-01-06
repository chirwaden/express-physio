import React from 'react';
import SignupForm from './SignupForm';
import styled from 'styled-components';
// import Main from '../PagesWrapper';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class SignupPage extends React.Component {
    render() {
        return (

            // <Main>
                <div>
                    <Wrapper>
                        <SignupForm />
                    </Wrapper>
                </div>
            // </Main>
        
        );
    }   
}

export default SignupPage;