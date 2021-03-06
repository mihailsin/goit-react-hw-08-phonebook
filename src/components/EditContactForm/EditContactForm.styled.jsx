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
const Div = styled.div`
  margin-left: auto;
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export { Form, Label, Input, Div, Wrapper };
