import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { PurpleButton } from '../../components/base';
import GoBackButton from '../../components/GoBackButton';
import MobileHeader from '../../components/Header';
import { Logo } from '../../components/vectors';
import { useGoBack } from '../../hooks';
import { auth } from '../../lib/firebase/firebaseClient';
import { useAuthStore } from '../../lib/store/auth';
import { colors } from '../../styles/colors';

/**
 * 로그인 화면
 *
 * 로그인 후 이동해야할 다음 페이지 경로 반환
 *  */
export const loginLoader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('next') ?? '/';

  return { q };
};

interface LoaderResult {
  q?: string;
}

function Login() {
  const { userState, login } = useAuthStore();
  const { q } = useLoaderData() as LoaderResult;
  const goBack = useGoBack();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState) return;
    navigate(q!);
  }, [userState, navigate, q]);

  const handleGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    // login(googleProvider);
    const { user } = await signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <MobileHeader
        title={
          <div>
            <Logo width={24} height={24} /> 로그인
          </div>
        }
        headerLeft={<GoBackButton onClick={goBack} />}
      />
      <Block>
        <Text>
          <span css={svgStyle}>
            <Logo width={80} height={80} />
          </span>
          <p>Hello Podote!</p>
        </Text>
        <SignInButton onClick={handleGoogleLogin}>
          Sign in With Google
        </SignInButton>
      </Block>
    </>
  );
}

const svgStyle = css`
  margin-top: 1rem;
`;

const SignInButton = styled(PurpleButton)`
  width: 15rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border: 2px solid ${colors.border0};
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex: 1;
  gap: 1.5rem;

  color: ${colors.purple0};
`;

const Text = styled.h1`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  font-weight: 600;
  color: ${colors.text1};
`;

export default Login;
