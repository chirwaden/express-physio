import React from 'react';
import styled from 'styled-components';
import Auth from '../../../services/AuthService'
import Input from '../../Styles/InputFields';
import Button from '../../Styles/Buttons';

const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .centerAlign {
        display: flex;
        justify-content: center;
    }

    form {
        width: 80%;
        max-width: 500px;

        h2{
            margin: 0px;
            line-height:28px;
        } 
    }
`;

class SignupForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
    .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
    });
}


onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
}

onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
}

    render() {
        return (
            <FormWrapper>
                <form onSubmit={this.onSubmit}>
                    <h2>Get started</h2>
                    <p className="subText">Enter your details below.</p>

                    <div>
                        <label>Email</label>
                        <Input 
                             value={this.state.email} 
                            onChange={this.onChange} 
                            type="email" 
                            name="email"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <Input                                       
                            onChange={this.onChange}
                            value={this.state.password}
                            type="password"   
                            name="password"
                        />
                    </div>

                    <div className="centerAlign">
                    <Button primary onClick={this.login.bind(this)}>Sign up</Button>
                    </div>
                </form>
            </FormWrapper>
        );
    }   
}

export default SignupForm;