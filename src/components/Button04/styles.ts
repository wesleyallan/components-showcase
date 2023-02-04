import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  transition: top 0.5s;
  top: 0;
`;

export const Icon = styled.span`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.5s;
`;

export const Button = styled.div`
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #1163ff;
  --tooltip-color: #eeeeee;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: 'Arial';
  transition: background 0.3s;
  &::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: var(--tooltip-color);
    font-size: 0.9rem;
    color: #111;
    border-radius: 0.25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
  }
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: var(--tooltip-color);
    left: calc(50% - 10px);
    bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
  }
  &::after,
  &::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }
  &:hover {
    background: #6c18ff;
  }
  &:hover ${Text} {
    top: -100%;
  }
  &:hover ${Icon} {
    top: 0;
  }
  &:hover:before,
  &:hover:after {
    opacity: 1;
    visibility: visible;
  }
  &:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }
  &:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
`;
