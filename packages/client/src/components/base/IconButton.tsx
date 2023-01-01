import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const IconButton = styled.span`
  cursor: pointer;
  border: 1px solid #0000;
  border-radius: 3px;
  background: transparent;
  color: ${colors.purple0};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${colors.brightPurble0};
    background: #0000;
  }
  &:active {
    color: ${colors.purple0};
  }
`;
