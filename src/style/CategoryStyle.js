import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0rem;

  @media screen and (max-width: 600px) {
    gap: 0;
  }
`;

export const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: ${({ theme }) => theme.backgroundLinear};
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  //transform: scale(0.8);

  h4 {
    color: ${({ theme }) => theme.inputText};
    font-size: 1.2rem;
    margin: 0;
  }

  svg {
    color: ${({ theme }) => theme.inputText};
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 400px) {
    width: 5rem;
    height: 5rem;
    h4 {
      font-size: 0.9rem;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;
