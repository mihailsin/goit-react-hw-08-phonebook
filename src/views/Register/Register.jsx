import React from 'react';
import { Grid, GridContainer } from '../Contacts/Contacts.styled';
import {
  Form,
  Label,
  Input,
  Button,
  Wrapper,
} from '../../components/ContactForm/ContactForm.styled';

const Register = () => {
  return (
    <Grid>
      <GridContainer>
        <Form>
          <Wrapper>
            <Label htmlFor="userName">Name</Label>
            <Input type="text" id="userName" name="name" />

            <Label htmlFor="userEmail">Email</Label>
            <Input type="email" id="userEmail" name="email" />

            <Label htmlFor="userPassword">Password</Label>
            <Input type="password" id="userPassword" name="password" />

            <button type="submit">Sign up</button>
          </Wrapper>
        </Form>
      </GridContainer>
    </Grid>
  );
};

export default Register;
