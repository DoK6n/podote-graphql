import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  LoaderFunction,
  Outlet,
  redirect,
  useNavigate,
} from 'react-router-dom';
import { BaseButton, Block, ItemButton } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import { useAccount } from '../hooks';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { colors } from '../styles/colors';

/**
 * 유저 정보나 설정 변경 관련 화면
 *
 * Loader에서 로그인 체크 후 비로그인시 로그인 화면으로 이동
 *  */
export const settingLoader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect('/auth/login?next=/setting');

  return {};
};

function Setting() {
  const navigate = useNavigate();

  const handleGoRecycleBin = () => {
    navigate(`/recyclebin?mode=todo`);
  };

  useAccount();

  return (
    <>
      <MobileHeader title={<div>Setting</div>} />
      <SettingBlock>
        <Button>내 계정</Button>
        <Button onClick={handleGoRecycleBin}>휴지통</Button>
      </SettingBlock>
      <Footer />
    </>
  );
}

const SettingBlock = styled(Block)`
  padding: 0;
  background-color: ${colors.purple4};
  gap: 4px;
`;

const Button = styled(BaseButton)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${colors.purple2};

  transition: all 0.2s ease-out;

  &:active {
    background: transparent;
    border-bottom: 1px solid ${colors.purple5};
    border-top: 1px solid ${colors.purple5};
  }
`;

export default Setting;
