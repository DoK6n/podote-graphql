import { css } from '@emotion/react';
import { LogoGray } from '../components/vectors';

interface Props {
  message?: string;
}

export default function Index({ message = '컨텐츠가 없어요.' }: Props) {
  return <p css={style}>{message}</p>;
}

const style = css`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #818181;
  &::before {
    display: block;
    margin-bottom: 0.5rem;
    content: url(${LogoGray});
  }
`;
