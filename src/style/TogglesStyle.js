import styled from "styled-components";

export const ThemeButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-top: 1rem;
  font-size: 3rem;
  p {
    font-size: 1rem;
  }
  float: left;
  position: absolute;

  @media screen and (max-width: 400px) {
    p{
      display: none;
    }
  }
`;
