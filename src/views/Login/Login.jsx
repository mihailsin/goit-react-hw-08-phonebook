import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import { useSignInUserMutation, useGetCurrentUserQuery } from 'redux/userApi';
import { Grid, GridContainer } from '../Contacts/Contacts.styled';
import {
  Form,
  Label,
  Input,
  Button,
  Wrapper,
} from '../../components/ContactForm/ContactForm.styled';

const Login = () => {
  const dispatch = useDispatch();
  // const { data: currentUser } = useGetCurrentUserQuery();
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
    <Grid>
      <GridContainer>
        <Form onSubmit={submitHandler}>
          <Wrapper>
            <Label htmlFor="userEmail">Email</Label>
            <Input
              type="email"
              id="userEmail"
              name="email"
              onChange={inputHandler}
            />

            <Label htmlFor="userPassword">Password</Label>
            <Input
              type="password"
              id="userPassword"
              name="password"
              onChange={inputHandler}
            />

            <button type="submit">Sign in</button>
          </Wrapper>
        </Form>
      </GridContainer>
    </Grid>
  );
};

export default Login;
