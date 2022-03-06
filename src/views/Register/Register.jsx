import React from 'react';
import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/userApi';
import { setUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { Grid, GridContainer } from '../Contacts/Contacts.styled';
import TextField from '@mui/material/TextField';
import SubmitButton from 'components/SubmitButton';
import {
  Form,
  Label,
  Wrapper,
} from '../../components/ContactForm/ContactForm.styled';

const Register = () => {
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const inputHandler = e => {
    switch (e.target.name) {
      case 'name':
        setUserName(e.target.value);
        break;
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
      userName,
      userEmail,
      userPassword,
    });
    registerUser({ name: userName, email: userEmail, password: userPassword })
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
            <Label htmlFor="userName"></Label>
            <TextField
              sx={{ mt: 2, mb: 2 }}
              variant="outlined"
              label="Name"
              onChange={inputHandler}
              type="text"
              id="userName"
              name="name"
            />

            <Label htmlFor="userEmail"></Label>
            <TextField
              sx={{ mb: 2 }}
              type="email"
              variant="outlined"
              id="userEmail"
              label="Email"
              onChange={inputHandler}
              name="email"
            />

            <Label htmlFor="userPassword"></Label>
            <TextField
              sx={{ mb: 2 }}
              variant="outlined"
              label="Password"
              onChange={inputHandler}
              type="password"
              id="userPassword"
              name="password"
            />
            <SubmitButton text={'Sign up'}></SubmitButton>
          </Wrapper>
        </Form>
      </GridContainer>
    </Grid>
  );
};

export default Register;
