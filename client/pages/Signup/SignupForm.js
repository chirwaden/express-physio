import React from 'react';

class SignupForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name:'',
        username:'',
        email:'',
        password:'',
        passwordConfirm:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
}

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign up with us!</h1>
                <div>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.onChange} type="text" name="name" />
                </div>
                <div>
                    <label>Username</label>
                    <input value={this.state.username} onChange={this.onChange} type="text" name="username" />
                </div>
                <div>
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.onChange} type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChange} type="password" name="password" />
                </div>
                <div>
                    <label>Password Confirmation</label>
                    <input value={this.state.passwordConfirm} onChange={this.onChange} type="password" name="passwordConfirm" />
                </div>
                <div>
                    <button>Sign up</button>
                </div>
            </form>
        );
    }   
}

export default SignupForm;