import styled from 'styled-components';

export const Box = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${(props) => props.theme.foregroundLight};
`;
