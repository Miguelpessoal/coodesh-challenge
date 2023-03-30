import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.darkBlue[100]};

  margin-top: 15.1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.orange[100]};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.orange[100]};

  width: 21rem;
  height: 2rem;
  margin-top: 1.5rem;

  border-radius: 6px;

  border: 0;

  color: ${(props) => props.theme.colors.darkBlue[100]};
  font-weight: 500;

  :hover {
    background: ${(props) => props.theme.colors.orange[300]};
    color: ${(props) => props.theme.colors.white[100]};
    transition: 0.6s;

    cursor: pointer;
  }
`;
