import React from 'react';
import {connect} from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../../actions';
import styled from 'styled-components';
import Input from '../../Styles/InputFields';
import Button from '../../Styles/Buttons';

const form = reduxForm({  
  form: 'login'
});

const renderField = field => (  
    <div>
      <Input className="form-control" {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

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

class SigninForm extends React.Component {
    handleFormSubmit(formProps) {
        this.props.loginUser(formProps);
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
        const { handleSubmit } = this.props;
        return (
            <FormWrapper>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <h2>Get started</h2>
                    <p className="subText">Enter your details below.</p>

                    <div>
                        <label>Email</label>
                        <Field 
                            className="form-control"
                            component={renderField}
                            type="email" 
                            name="email"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field                                       
                            className="form-control"
                            component={renderField}
                            type="password"   
                            name="password"
                        />
                    </div>

                    <div className="centerAlign">
                    <Button primary type="submit">Log In</Button>
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

export default connect(mapStateToProps, { loginUser })(form(SigninForm));  