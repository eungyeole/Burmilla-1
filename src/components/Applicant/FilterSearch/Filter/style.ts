import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterItemContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > p {
    display: inline-block;
    color: #3f3f3f;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`;
