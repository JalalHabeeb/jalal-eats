import styled from "styled-components";

export const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(to right, #f27121, #e94057);
    color: ${({ theme }) => theme.text};
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 10px;
  }
  
  @media screen and (max-width: 1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.InputText};
  background: #fff;
  border: 1px solid #313131;
  margin-right: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;

export const Info = styled.div`
  margin-left: 3rem;
  text-align: left;
  line-height: 30px;
  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Prepare = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 2rem;
`