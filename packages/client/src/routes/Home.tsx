import styled from '@emotion/styled';
import { GoogleAuthProvider } from 'firebase/auth';
import { Suspense, useEffect } from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import { Block, PurpleButton } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { auth } from '../lib/firebase/firebaseClient';
import { useAuthStore } from '../lib/store/auth';

function Home() {
  const { userState, setUserState, login, logout } = useAuthStore();

  useEffect(() => {
    auth.onAuthStateChanged((fbUser) => {
      if (fbUser) {
        setUserState(fbUser);
      }
    });
  }, []);

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    login(googleProvider);
  };

  const handleGoogleLogout = () => {
    logout();
  };
  return (
    <>
      <MobileHeader />
      <Block>
        <AuthBlock>
          {userState ? (
            <PurpleButton onClick={handleGoogleLogout}>
              구글 로그아웃
            </PurpleButton>
          ) : (
            <PurpleButton onClick={handleGoogleLogin}>구글 로그인</PurpleButton>
          )}
        </AuthBlock>
        {/* <Outlet /> */}
      </Block>
      <Footer />
    </>
  );
}

const AuthBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default Home;
