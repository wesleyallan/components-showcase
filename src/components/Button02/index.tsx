import React from 'react';
import type { ButtonProps } from './types';
import { Button } from './styles';

export const Button02 = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};
