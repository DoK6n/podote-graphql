import styled from '@emotion/styled';

export const ItemButton = styled.button`
  cursor: pointer;
  border: 1px solid #0000;
  border-radius: 3px;
  color: #cccccc;
  background: transparent;
  padding: 0.5em;
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #564689;
    color: #fff;
  }
  &:active {
    background: #0000;
    border: 1px solid #564689;
    color: #fff;
  }
`;
