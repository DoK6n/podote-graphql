import { LoaderFunction, Outlet, redirect } from 'react-router-dom';
import { Block } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { checkIsLoggedIn } from '../lib/protectRoute';

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
