import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../../actions';
import styled from 'styled-components';
import Input from '../../Styles/InputFields';
import Button from '../../Styles/Buttons';

const form = reduxForm({  
  form: 'register',
  validate
});

const renderField = field => (  
    <div>
      <input className="form-control" {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

function validate(formProps) {  
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

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

class SignupForm extends Component {
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

    render() {
        const {handleSubmit} = this.props;

        return (
            <FormWrapper>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {this.renderAlert()}
                    <h2>Get started</h2>
                    <p className="subText">Enter your details below.</p>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" className="form-control" component={renderField} type="text"/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name="lastName" className="form-control" component={renderField} type="text"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" className="form-control" component={renderField} type="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" className="form-control" component={renderField} type="password"/>
                    </div>
             
                    <div className="centerAlign">
                    <Button type="submit" primary>Sign up</Button>
                    </div>
                </form>
            </FormWrapper>
        );
    }   
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { registerUser } )(form(SignupForm));