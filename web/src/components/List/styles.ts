import styled from "styled-components";

export const Content = styled.div`
  background: ${(props) => props.theme.colors.darkBlue[100]};
`;

export const PaginateButton = styled.button`
  display: flex;
  justify-content: center;

  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #f2760b;

  :hover {
    border: 2px solid white;
    color: #f2760b;
    transition: 0.6s;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1280px;
  margin-top: -90px;
`;

export const PageCount = styled.div`
  color: #f2760b;
  margin-top: 130px;
  font-size: 30px;
  font-weight: 500;
`;
