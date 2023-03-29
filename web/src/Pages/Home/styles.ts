import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.colors.orange[100]};
  font-size: 40px;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.orange[100]};

  border: 2px solid ${(props) => props.theme.colors.orange[100]};
  border-radius: 6px;

  width: 12rem;
  height: 2.5rem;
  margin: 8rem 0rem 2rem 68rem;

  font-family: "Inter", sans-serif;
  font-weight: 700;

  :hover {
    background-color: ${(props) => props.theme.colors.orange[100]};
    color: ${(props) => props.theme.colors.darkBlue[100]};

    transition: 0.6s;
  }
`;
