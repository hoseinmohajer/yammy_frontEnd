import styled from 'styled-components';

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const FormControl = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 8px;
`;
