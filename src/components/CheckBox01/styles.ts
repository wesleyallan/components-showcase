import styled from 'styled-components';

export const Slider = styled.span`
  --background: #28096b;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
  &:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }
`;

export const Checkbox = styled.input`
  &:checked + ${Slider} {
    background-color: #522ba7;
  }

  &:checked + ${Slider}:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;

export const Switch = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  & ${Checkbox} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
