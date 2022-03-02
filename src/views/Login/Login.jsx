import React from 'react';
import { Grid, GridContainer } from '../Contacts/Contacts.styled';
import {
  Form,
  Label,
  Input,
  Button,
  Wrapper,
} from '../../components/ContactForm/ContactForm.styled';

const Login = () => {
  return (
    <Grid>
      <GridContainer>
        <Form>
          <Wrapper>
            <Label htmlFor="userEmail">Email</Label>
            <Input type="email" id="userEmail" name="email" />

            <Label htmlFor="userPassword">Password</Label>
            <Input type="password" id="userPassword" name="password" />

            <button type="submit">Sign in</button>
          </Wrapper>
        </Form>
      </GridContainer>
    </Grid>
  );
};

export default Login;
