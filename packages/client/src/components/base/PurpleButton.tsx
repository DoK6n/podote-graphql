import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const PurpleButton = styled.button`
  box-sizing: border-box;
  width: 10em;
  height: 3em;
  background: #564689;
  border: 1px solid #413966;
  border-radius: 6px;
  cursor: pointer;
  color: ${colors.text0};
  transition: all 0.2s ease-out;

  &:hover {
    background: #413966;
  }

  &:active {
    background: transparent;
  }
`;
