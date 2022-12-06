import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouteError } from 'react-router-dom';

interface IErrorResponse {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: { message: string; stack: string };
}

export default function ErrorPage() {
  const error = useRouteError() as IErrorResponse;
  console.error(error);

  return (
    <Block>
      <div css={style}>
        <h1>Oops!</h1>
        <p>예상치 못한 오류가 발생했어요.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    </Block>
  );
}

const Block = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
`;

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
