import React from 'react';
import { Box } from '../../components/BoxComponents/styles';
import { Button01 } from '../../components/Button01';
import { Button02 } from '../../components/Button02';
import { Button03 } from '../../components/Button03';
import { Button04 } from '../../components/Button04';
import { CheckBox01 } from '../../components/CheckBox01';
import { Input01 } from '../../components/Input01';
import { Input02 } from '../../components/Input02';
import { Input03 } from '../../components/Input03';
import * as S from './styles';

export const Showcase = () => {
  return (
    <S.Container>
      <S.Title>Buttons</S.Title>
      <S.ContainerItens>
        <Box>
          <Button01>Hover me :)</Button01>
        </Box>
        <Box>
          <Button02>Hover me :)</Button02>
        </Box>
        <Box>
          <Button03>Hover me :)</Button03>
        </Box>
        <Box>
          <Button04 size="200Mb">Download</Button04>
        </Box>
      </S.ContainerItens>
      <S.Title>CheckBox</S.Title>
      <S.ContainerItens>
        <Box>
          <CheckBox01 />
        </Box>
      </S.ContainerItens>
      <S.Title>Inputs</S.Title>
      <S.ContainerItens>
        <Box>
          <Input01 />
        </Box>
        <Box>
          <Input02 />
        </Box>
        <Box>
          <Input03 />
        </Box>
      </S.ContainerItens>
    </S.Container>
  );
};
