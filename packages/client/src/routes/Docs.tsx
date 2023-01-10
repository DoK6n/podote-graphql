import styled from '@emotion/styled';
import {
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from 'react-router-dom';
import { Block as BaseBlock, FullCard } from '../components/base';
import { Document } from '../components/document';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/MobileHeader';
import { useAccount, useGoBack } from '../hooks';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { scrollbarStyle } from '../styles/scrollbar';

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
        <Card>
          <Document id={docsId} />
        </Card>
      </Block>
    </>
  );
}

const Block = styled.div`
  flex: 1;
  overflow-x: hidden;
  padding: 1rem 0 1rem 0;
`;

const Card = styled(FullCard)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 2rem 0;
  max-height: 100%;
`;

export default Docs;
