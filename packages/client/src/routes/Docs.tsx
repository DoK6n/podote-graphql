import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import { Block, FullCard } from '../components/base';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/Header';
import { useGoBack } from '../hooks';
import { getDataById } from '../lib/data';

export const docsLoader: LoaderFunction = async ({ request }) => {
  const path = new URL(request.url).pathname.split('/');
  const docsId = path[path.length - 1];
  return { docsId };
};

interface LoaderResult {
  docsId: number | string;
}

function Docs() {
  const { docsId } = useLoaderData() as LoaderResult;
  const data = getDataById(Number(docsId));
  const goBack = useGoBack();
  return (
    <>
      <MobileHeader
        title={<div>Docs</div>}
        headerLeft={<GoBackButton onClick={goBack} />}
      />
      <Block>
        <FullCard>
          todo / {data.title} / 제목
          <Outlet />
        </FullCard>
      </Block>
    </>
  );
}

export default Docs;
