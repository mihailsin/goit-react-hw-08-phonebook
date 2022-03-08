import styled from 'styled-components';

const Form = styled.form``;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const Label = styled.label``;
const Input = styled.input`
  margin-bottom: 10px;
`;
const Button = styled.button`
  display: block;
  margin-left: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;
export { Form, Label, Input, Button, Wrapper };
