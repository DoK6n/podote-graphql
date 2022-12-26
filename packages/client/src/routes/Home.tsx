import styled from '@emotion/styled';
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from 'firebase/auth';
import { useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
import { Block, PurpleButton } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { auth } from '../lib/firebase/firebaseClient';
import { useRegisterMutation } from '../lib/graphql/mutation/mutation.generated';
import { useLoginLazyQuery } from '../lib/graphql/query/query.generated';
import { useAuthStore } from '../lib/store/auth';

// export const homeLoader: LoaderFunction = async ({ request }) => {};
// interface LoaderResult {}

interface ReturnUser extends User {
  metadata: {
    createdAt: string;
    creationTime: string;
    lastLoginAt: string;
    lastSignInTime: string;
  };
  stsTokenManager: {
    accessToken: string;
    expirationTime: number;
    isExpired: boolean;
  };
}

function Home() {
  const { userState, login, logout } = useAuthStore();
  const [loginLazyQuery] = useLoginLazyQuery();
  const [registerMutation] = useRegisterMutation();

  useEffect(() => {
    auth.onAuthStateChanged((fbUser) => {
      if (fbUser) {
        login(fbUser);
      }
    });
  }, []);

  const handleGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user as ReturnUser;
    // const accessToken = await user.getIdToken(false); // 토큰 강제 리프레쉬 옵션
    if (user) {
      const { data, loading } = await loginLazyQuery();

      if (!loading) {
        if (data && data.login) {
          login(user);
        } else {
          // DB에 유저 정보 저장
          const { data, errors } = await registerMutation();
          if (data && data.register) {
            login(user);
          }
        }
      }
    }
  };

  const handleGoogleLogout = () => {
    auth
      .signOut()
      .then(() => {
        logout();
      })
      .catch((error) => {
        console.error({ code: error.code, message: error.message });
      });
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
