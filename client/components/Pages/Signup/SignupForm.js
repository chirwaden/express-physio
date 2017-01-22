import React from 'react';
import styled from 'styled-components';
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
        name:'',
        email:'',
        password:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
                        <label>Name</label>
                        <Input value={this.state.name} onChange={this.onChange} type="text" name="name"/>
                    </div>
                     {/*<div>
                         <label>Username</label>
                         <input value={this.state.username} onChange={this.onChange} type="text" name="username"/>
                     </div>*/}
                    <div>
                        <label>Email</label>
                        <Input value={this.state.email} onChange={this.onChange} type="text" name="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Input value={this.state.password} onChange={this.onChange} type="password" name="password"/>
                    </div>
                    {/*<div>
                        <label>Password Confirmation</label>
                        <input value={this.state.passwordConfirmation} onChange={this.onChange} type="password" name="passwordConfirmation"/>
                    </div>*/}
                    <div className="centerAlign">
                    <Button primary>Sign up</Button>
                    </div>
                </form>
            </FormWrapper>
        );
    }   
}

export default SignupForm;