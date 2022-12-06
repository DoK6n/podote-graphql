import { LoaderFunction, Outlet } from 'react-router-dom';
import { Block } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { Logo } from '../components/vectors';

export const homeLoader: LoaderFunction = async ({ request }) => {
  // const url = new URL(request.url);
  return {};
};

function Home() {
  return (
    <>
      <MobileHeader
        // title={
        //   <div>
        //     <Logo /> Podote
        //   </div>
        // }
      />
      <Block>
        <Outlet />
      </Block>
      <Footer />
    </>
  );
}

export default Home;
