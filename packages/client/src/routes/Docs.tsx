import {
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from 'react-router-dom';
import { Block, FullCard } from '../components/base';
import { Document } from '../components/document';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/Header';
import { useAccount, useGoBack } from '../hooks';
import { checkIsLoggedIn } from '../lib/protectRoute';

/**
 * 할일에 연결된 문서 편집 화면
 *  */
export const docsLoader: LoaderFunction = async ({ request }) => {
  const path = new URL(request.url).pathname.split('/');
  const docsId = path[path.length - 1];

  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect(`/auth/login?next=/docs/${docsId}`);

  return { docsId };
};

interface LoaderResult {
  docsId: string;
}

function Docs() {
  const { docsId } = useLoaderData() as LoaderResult;

  useAccount();

  const goBack = useGoBack();
  return (
    <>
      <MobileHeader
        title={<div>Docs</div>}
        headerLeft={<GoBackButton onClick={goBack} />}
      />
      <Block>
        <FullCard>
          <Document id={docsId} />
          {/* <Outlet /> */}
        </FullCard>
      </Block>
    </>
  );
}

export default Docs;
