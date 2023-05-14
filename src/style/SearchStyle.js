import styled from "styled-components";

export const FormStyle = styled.form`
  margin: 0 auto;
  width: 50%;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: ${({ theme }) => theme.backgroundLinear};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.inputText};
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: ${({ theme }) => theme.inputText};
  }

`;