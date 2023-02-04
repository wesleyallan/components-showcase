import React from 'react';
import Button from './styles';
import type { ButtonProps } from './types';

export const Button01 = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};
