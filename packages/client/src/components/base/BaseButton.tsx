import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface BaseButtonStyledProps {
  fontSize?: string;
}

export const BaseButton = styled.button<BaseButtonStyledProps>`
  cursor: pointer;
  border: 1px solid #0000;
  border-radius: 3px;
  color: #cccccc;
  background: transparent;
  padding: 0.5em;
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;
  ${(props) => css`
    font-size: ${props.fontSize};
  `}
  &:hover, &:active {
    color: #fff;
  }
`;
