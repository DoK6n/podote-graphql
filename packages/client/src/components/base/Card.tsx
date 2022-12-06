import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { colors } from '../../styles/colors';

function Card({ children }: PropsWithChildren) {
  return <div css={cardStyle}>{children}</div>;
}

const cardStyle = css`
  width: 100%;
  min-height: 1rem;
  border: 1px solid ${colors.border2};
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 6px;

`;

export default Card;
