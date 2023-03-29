import styled from "styled-components";

interface BtnProps {
  type: string;
}

export const Button = styled.button<BtnProps>`
  background-color: ${({ theme, type }) =>
    type ? theme.colors.orange[200] : theme.colors.orange[100]};

  width: 21rem;
  height: 2rem;
  margin-top: 1.5rem;

  border-radius: 6px;

  border: 0;

  color: ${(props) => props.theme.colors.darkBlue[100]};
  font-weight: 500;

  :hover {
    background: ${(props) => props.theme.colors.orange[100]};
    color: ${(props) => props.theme.colors.darkBlue[200]};
    transition: 0.6s;
  }
`;
