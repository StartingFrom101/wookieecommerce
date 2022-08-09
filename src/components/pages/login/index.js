import React, { Component } from 'react';
import { validateFields } from '../../../validation';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

// BOOT
import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";


const initialState = {
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false
};



class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  /*
   * validates the field onBlur if sumbit button is not clicked
   * set the validateOnChange to true for that field
   * check for error
   */
  handleBlur(validationFunc, evt) {
    const field = evt.target.name;
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field]['validateOnChange'] === false &&
      this.state.submitCalled === false
    ) {
      this.setState(state => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value)
        }
      }));
    }
    return;
  }

  /*
   * update the value in state for that field
   * check for error if validateOnChange is true
   */
  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState(state => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
      }
    }));
  }

  /*
   * validate all fields
   * check if all fields are valid if yes then submit the Form
   * otherwise set errors for the feilds in the state
   */
  handleSubmit(evt) {
    evt.preventDefault();
    // validate all fields
    const { email, password } = this.state;
    const emailError = validateFields.validateEmail(email.value);
    const passwordError = validateFields.validatePassword(password.value);
    if ([emailError, passwordError].every(e => e === false)) {
      // no errors submit the form
      console.log('success');

      // clear state and show all fields are validated
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
      this.props.navigate('/')
      
    } else {
      // update the state with errors
      this.setState(state => ({
        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError
        },
        password: {
          ...state.password,
          validateOnChange: true,
          error: passwordError
        }
      }));
    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {

    const { navigation } = this.props;

    const { email, password, allFieldsValidated } = this.state;
    return (
      <>
      <Container className="text-center p-4 ">
      <p className="display-4">Already Registered?</p>
      </Container>
      <Container className="border border-1 border-black p-5">
            {/* Form Starts Here */}
            <Form onSubmit={evt => this.handleSubmit(evt)}>
              
            <p className="display-5">Login</p>
            <p>If you have an account with us, please log in.</p>

              {/* Email field */}
              <div className="form-group py-2">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email.value}
                  placeholder="Enter your email"
                  className={classnames(
                    'form-control',
                    { 'is-valid': email.error === false },
                    { 'is-invalid': email.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateEmail, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateEmail, evt)
                  }
                />
                <div className="invalid-feedback">{email.error}</div>
              </div>

              {/* Password field */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password.value}
                  placeholder="Enter your password"
                  className={classnames(
                    'form-control',
                    { 'is-valid': password.error === false },
                    { 'is-invalid': password.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validatePassword, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validatePassword, evt)
                  }
                />
                <div className="invalid-feedback">{password.error}</div>
              </div>
              <Button 
                variant='outline-primary'
                 className="p-2 px-5 border-3 rounded-3 my-2"
                type="submit"
                onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Submit
              </Button>
            </Form>
          </Container>
      </>
    );
  }
} 

export default function(props) {
    const navigation = useNavigate();
    return <LoginForm {...props} navigate={navigation} />;
};
