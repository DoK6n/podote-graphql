import { css, Global } from '@emotion/react';
import { colors } from './colors';
import { scrollbarStyle } from './scrollbar';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }
        * {
          box-sizing: inherit;
        }
        ::selection {
          background: ${colors.purple7};
        }
        body {
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
            'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          margin: 0;
          background: #3b305a;
          color: #fff;
          overflow-y: overlay;
          overflow-x: overlay;

          ${scrollbarStyle}
          // 에디터 툴팁
          & .MuiTooltip-tooltip {
            background: #4d436c;
            color: #abb2bf;
            & .MuiTooltip-arrow {
              color: rgb(77, 67, 108);
            }
          }
        }
        [contenteditable] {
          outline: 0px solid transparent;
        }
        div[contenteditable]:empty:before {
          content: attr(placeholder);
          color: ${colors.purple2};
        }

        button,
        input {
          font-family: inherit;
        }
        button {
          padding: 0;
          background: none;
          border: none;
          outline: none;
        }
        a {
          color: black;
          text-decoration: none;
          outline: none;
        }

        a:hover,
        a:active {
          text-decoration: none;
          color: black;
        }
      `}
    />
  );
}

export default GlobalStyles;
