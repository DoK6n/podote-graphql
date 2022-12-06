import { css } from '@emotion/react';
import { LoaderFunction, useLoaderData } from 'react-router-dom';

export const listLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return { url };
};

interface LoaderResult {
  url: URL;
}

function List() {
  const { url } = useLoaderData() as LoaderResult;

  console.log(url);

  return <div css={style}>List</div>;
}

export default List;

const style = css`
  width: 50%;
  height: 50%;
  border: 1px solid red;
`;
