import styled from 'styled-components';

export default styled.button`
  --bg: #000;
  --hover-bg: #ff90e8;
  --hover-text: #000;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
  &:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }
  &:active {
    transform: translate(0);
    box-shadow: none;
  }
`;
