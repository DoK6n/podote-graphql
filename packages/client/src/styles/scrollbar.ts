import { css } from '@emotion/react';

export const scrollbarStyle = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background: #5c4b8c30;
    border-radius: 8px;
  }
`;
