import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const PurpleButton = styled.button`
  box-sizing: border-box;
  width: 10em;
  height: 3em;
  background: ${colors.border1};
  border: 1px solid ${colors.border3};
  border-radius: 6px;
  cursor: pointer;
  color: ${colors.text0};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${colors.border3};
  }

  &:active {
    background: transparent;
  }
`;
