import React from 'react';

class SignupForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        username:''
    }
}

    render() {
        return (
            <form className="row">
                <h1>Sign up with us!</h1>
                <div className="form-group">
                   <label className="control-label">Username</label>
                   <input value={this.state.username} type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                   <button className="btn btn-primary btn-lg">Sign up</button>

                </div>
            </form>
        );
    }   
}

export default SignupForm;