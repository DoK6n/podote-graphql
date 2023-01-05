import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const IconButton = styled.span<{
  svgSize?: number;
  disabled?: boolean;
}>`
  cursor: pointer;
  border: 1px solid #0000;
  border-radius: 3px;
  background: transparent;
  color: ${colors.purple0};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;
  ${(props) =>
    props.svgSize &&
    css`
      svg {
        width: ${props.svgSize}px;
        height: ${props.svgSize}px;
      }
    `}

  ${({ disabled = false }) =>
    !disabled &&
    css`
      &:hover {
        color: ${colors.brightPurple};
        background: #0000;
      }
      &:active {
        color: ${colors.purple0};
      }
    `}
`;
