import React from 'react';
import * as S from './styles';

export const Input03 = () => {
  return (
    <S.InputGroup>
      <S.Input required placeholder="Name" type="input" />
      <S.Label>Name</S.Label>
    </S.InputGroup>
  );
};
