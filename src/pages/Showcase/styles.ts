import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  margin: 20px 0;
`;
