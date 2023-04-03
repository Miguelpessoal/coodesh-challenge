import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 80rem;

  margin-top: 2rem;

  border-top: 2px solid ${(props) => props.theme.colors.white[200]};
  border-radius: 6px;
`;

export const Message = styled.h3`
  display: flex;
  justify-content: center;
  padding: 2rem;

  width: 60rem;
  margin-top: 6rem;

  background: ${(props) => props.theme.colors.brown};
  border-radius: 6px;

  color: ${(props) => props.theme.colors.orange[200]};
`;
