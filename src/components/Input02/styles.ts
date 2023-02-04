import styled from 'styled-components';

export const TextInput = styled.input`
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
  &::placeholder {
    transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    opacity: 1;
    user-select: none;
    color: rgba(255, 255, 255, 0.582);
  }
  &:focus,
  &:active {
    outline: none;
    background-color: #353535;
  }
`;

export const TextInputWrapper = styled.div`
  --accent-color: #a3e583;
  position: relative;
  width: 180px;
  margin: 12px 5px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
  &:before,
  &:after {
    content: '';
    left: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
    bottom: -1px;
    z-index: 4;
    width: 100%;
  }
  &:before {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  &:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
  }
  &::after {
    content: '';
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    will-change: transform;
    border-bottom: 2px solid var(--accent-color);
    border-bottom-color: var(--accent-color);
  }
  &:focus-within ${TextInput} {
    background-color: #353535;
  }
  &:focus-within ${TextInput}::placeholder {
    opacity: 0;
  }
  &:focus-within:after {
    border-bottom: 2px solid var(--accent-color);
    transform: scaleX(1);
  }
  &:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
    transform: scaleX(1);
  }
`;