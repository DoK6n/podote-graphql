import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { fadeInLeft } from '../../styles/fadeInLeft';

export const RoundButton = styled.button<{ delay?: number }>`
  box-sizing: border-box;

  display: flex;
  align-items: center;

  height: 3em;
  width: fit-content;
  padding: 1rem;
  background: ${colors.border1};
  border: 1px solid ${colors.border3};
  border-radius: 20px;
  cursor: pointer;
  color: ${colors.text0};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;
  animation: ${fadeInLeft} ${({ delay = 0.1 }) => delay}s ease;

  ${({disabled = false}) =>
    disabled
      ? css`
          cursor: default;
          background: ${colors.disabledPurple};
          border: 1px solid ${colors.disabledPurple};
          color: ${colors.gray2}45;
        `
      : css`
          &:active {
            background: transparent;
          }
        `}
`;
