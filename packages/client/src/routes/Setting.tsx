import { LoaderFunction, Outlet } from 'react-router-dom';
import { Block } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';

export const settingLoader: LoaderFunction = async ({ request }) => {
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
