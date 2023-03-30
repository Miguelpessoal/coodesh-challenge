import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h5`
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.colors.orange[100]};
  font-weight: bold;
  font-size: 15px;

  margin-bottom: -1.5px;
  margin-left: 0.7rem;

  padding: 0rem 0.4rem;

  background: ${(props) => props.theme.colors.darkBlue[100]};
  height: 0.5rem;
  width: 3rem;

  z-index: 1;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.darkBlue[200]};
  border: 2px solid ${(props) => props.theme.colors.white[100]};

  width: 20rem;
  height: 2rem;

  color: ${(props) => props.theme.colors.white[100]};
  font-family: "Inter", sans-serif;
  font-size: medium;

  padding: 0.5rem 0.4rem 0rem 0.4rem;

  border-radius: 6px;

  :hover {
    border: 2px solid ${(props) => props.theme.colors.orange[100]};
    transition: 0.6s;
  }

  :focus {
    border: 2px solid ${(props) => props.theme.colors.orange[100]};
  }
`;
