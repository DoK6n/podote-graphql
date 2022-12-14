import { LoaderFunction, Outlet, redirect } from 'react-router-dom';
import { Block } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { checkIsLoggedIn } from '../lib/protectRoute';

/**
 * 유저 정보나 설정 변경 관련 화면
 * 
 * Loader에서 로그인 체크 후 비로그인시 로그인 화면으로 이동
 *  */
export const settingLoader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect('/auth/login?next=/setting');

  const url = new URL(request.url);
  return { url };
};

function Setting() {
  return (
    <>
      <MobileHeader title={<div>Setting</div>} />
      <Block>
        <Outlet />
      </Block>
      <Footer />
    </>
  );
}

export default Setting;
