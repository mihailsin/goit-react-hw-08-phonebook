import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import { useSignInUserMutation } from 'redux/userApi';
import TextField from '@mui/material/TextField';
import SubmitButton from 'components/SubmitButton';
import FormWrapper from 'components/FormWrapper';
import {
  Form,
  Label,
  Wrapper,
} from '../../components/ContactForm/ContactForm.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [signInUser] = useSignInUserMutation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const inputHandler = e => {
    switch (e.target.name) {
      case 'email':
        setUserEmail(e.target.value);
        break;
      case 'password':
        setUserPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log({
      userEmail,
      userPassword,
    });

    signInUser({ email: userEmail, password: userPassword })
      .then(({ data }) => {
        console.log('signed in user:', data.user, 'token:', data.token);
        dispatch(setUser(data));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <FormWrapper>
      <Form onSubmit={submitHandler}>
        <Wrapper>
          <h2>Log in form</h2>
          <Label htmlFor="userEmail"></Label>
          <TextField
            sx={{ mt: 2, mb: 2 }}
            type="email"
            variant="outlined"
            id="userEmail"
            label="Email"
            name="email"
            onChange={inputHandler}
          />

          <Label htmlFor="userPassword"></Label>
          <TextField
            type="password"
            id="userPassword"
            name="password"
            label="Password"
            onChange={inputHandler}
          />
          <SubmitButton text={'Sign in'} />
        </Wrapper>
      </Form>
    </FormWrapper>
  );
};

export default Login;
