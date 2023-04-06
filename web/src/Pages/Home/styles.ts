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

  width: 15rem;
  height: 2.5rem;
  margin: 0rem 0rem 0rem 68rem;

  font-family: "Inter", sans-serif;
  font-weight: 700;

  :hover {
    background-color: ${(props) => props.theme.colors.orange[100]};
    color: ${(props) => props.theme.colors.darkBlue[100]};

    transition: 0.6s;
  }
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const FileInputLabel = styled.label`
  display: flex;
  flex-direction: row;

  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;

  background-color: transparent;
  color: ${(props) => props.theme.colors.orange[100]};

  border: 2px solid ${(props) => props.theme.colors.orange[100]};
  border-radius: 6px;

  width: 15rem;
  height: 2.5rem;
  margin: 0rem 0rem 1rem 68rem;

  font-family: "Inter", sans-serif;
  font-weight: 700;

  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props) => props.theme.colors.orange[100]};
    color: ${(props) => props.theme.colors.darkBlue[100]};

    transition: 0.6s;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const LogOutButton = styled(Button)`
  color: ${(props) => props.theme.colors.red};

  margin-bottom: 1rem;

  border: 2px solid ${(props) => props.theme.colors.red};

  :hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white[100]};

    transition: 0.6s;
  }
`;
