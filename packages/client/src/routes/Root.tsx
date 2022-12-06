import { css } from '@emotion/react';
import { useEffect } from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import { calculateVh } from '../lib/calculateVh';

export const rootLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  return { q };
};

interface LoaderResult {
  q?: string;
}

function Root() {
  const { q } = useLoaderData() as LoaderResult;

  useEffect(() => {
    calculateVh();
    window.addEventListener('resize', calculateVh);
    return () => {
      window.removeEventListener('resize', calculateVh);
    };
  }, []);

  return (
    <div css={style}>
      <Outlet />
    </div>
  );
}

const style = css`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  min-height: calc(var(--vh, 1vh) * 100);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export default Root;
