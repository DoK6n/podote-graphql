import styled from '@emotion/styled';
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { Block } from '../components/base';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/MobileHeader';
import { RecycleBinList } from '../components/recycleBin';
import { Logo } from '../components/vectors';
import { useGoBack } from '../hooks';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { scrollbarStyle } from '../styles/scrollbar';

export const recyclebinLoader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect('/auth/login?next=/recyclebin');

  return {};
};

interface LoaderResult {}

function RecycleBin() {
  // const {  } = useLoaderData() as LoaderResult;
  const goBack = useGoBack();

  return (
    <>
      <MobileHeader
        title={
          <div>
            <Logo width={24} height={24} /> 휴지통
          </div>
        }
        headerLeft={<GoBackButton onClick={goBack} />}
      />
      <ListBlock>
        <RecycleBinList />
      </ListBlock>
    </>
  );
}

const ListBlock = styled(Block)`
  gap: 0.625rem;
  overflow-y: auto;
  padding: 1rem;
  ${scrollbarStyle}
`;

export default RecycleBin;
