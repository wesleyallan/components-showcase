import React from 'react';
import { Box } from './styles';
import type { BoxComponentsProps } from './types';

export const BoxComponents = ({ children }: BoxComponentsProps) => {
  <>
    <Box>{children}</Box>
  </>;
};
