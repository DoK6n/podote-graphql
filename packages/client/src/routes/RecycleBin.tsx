import styled from '@emotion/styled';
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { RectinglePageBlock } from '../components/base';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/MobileHeader';
import { Logo } from '../components/vectors';
import { useGoBack } from '../hooks';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { colors } from '../styles/colors';

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
            <Logo width={24} height={24} /> RecycleBin
          </div>
        }
        headerLeft={<GoBackButton onClick={goBack} />}
      />
      <Block>
        <RecycleBinBlock>RecycleBin</RecycleBinBlock>
      </Block>
    </>
  );
}

const Block = styled.div`
  flex: 1;
  overflow-x: hidden;
  padding: 1rem;
`;

const RecycleBinBlock = styled(RectinglePageBlock)`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.border2};
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0 0 1rem;
  transition: all 0.2s ease-in-out;
`;

export default RecycleBin;
