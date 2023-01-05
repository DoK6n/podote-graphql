import styled from '@emotion/styled';
import {
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Block } from '../components/base';
import GoBackButton from '../components/GoBackButton';
import MobileHeader from '../components/MobileHeader';
import { RecycleBinList } from '../components/recycleBin';
import { Logo } from '../components/vectors';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { scrollbarStyle } from '../styles/scrollbar';
import { useEffect, useState } from 'react';
import ListModeSelector, {
  ListMode,
} from '../components/recycleBin/ListModeSelector';

export const recyclebinLoader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect('/auth/login?next=/recyclebin');

  return {};
};

interface LoaderResult {}

function RecycleBin() {
  // const {} = useLoaderData() as LoaderResult;
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/setting');
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<ListMode>(
    (searchParams.get('mode') as ListMode) ?? 'todo',
  );

  useEffect(() => {
    const nextMode = (searchParams.get('mode') as ListMode) ?? 'todo';
    if (nextMode !== mode) {
      setMode(nextMode);
    }
  }, [mode, searchParams]);

  const onSelectMode = (mode: ListMode) => {
    setSearchParams({ mode });
    navigate(`?mode=${mode}`);
  };

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
        <ListModeSelector mode={mode} onSelectMode={onSelectMode} />
        <RecycleBinList mode={mode} />
      </ListBlock>
    </>
  );
}

const ListBlock = styled(Block)`
  gap: 0.5rem;
  overflow-y: auto;
  padding: 1rem;
  ${scrollbarStyle}
`;

export default RecycleBin;
