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
  font-size: ${(props) => props.theme.fontSizes.xxl}px;
  color: ${(props) => props.theme.colors.orange[100]};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
