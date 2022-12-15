import styled from '@emotion/styled';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
import { Block, PurpleButton } from '../components/base';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { auth } from '../lib/firebase/firebaseClient';
import { useAddUserMutation } from '../lib/graphql/mutation/mutation.generated';
import { useRetrieveUserByIdLazyQuery } from '../lib/graphql/query/query.generated';
import { useAuthStore } from '../lib/store/auth';

// export const homeLoader: LoaderFunction = async ({ request }) => {};
// interface LoaderResult {}

function Home() {
  const { userState, login, logout } = useAuthStore();
  const [retrieveUserByIdLazyQuery] = useRetrieveUserByIdLazyQuery();
  const [addUserMutation] = useAddUserMutation();

  useEffect(() => {
    auth.onAuthStateChanged((fbUser) => {
      if (fbUser) {
        login(fbUser);
      }
    });
  }, []);

  const handleGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleProvider);

    if (user) {
      const { data, loading } = await retrieveUserByIdLazyQuery({
        context: {
          headers: {
            uid: user.uid,
          },
        },
      });

      if (!loading) {
        if (data && data.retrieveUserById) {
          login(user);
        } else {
          // DB에 유저 정보 저장
          const { data, errors } = await addUserMutation({
            variables: {
              data: {
                email: user.email!,
                name: user.displayName!,
                snsTypeName: user.providerData[0].providerId,
              },
            },
            context: {
              headers: {
                uid: user.uid,
              },
            },
          });
          if (data && data.addUser) {
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
