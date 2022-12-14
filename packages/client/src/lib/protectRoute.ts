import userStorage from './userStorage';

// Loader단에서 로그인 여부 체크하기 위해 사용
export const checkIsLoggedIn = (request?: Request) => {
  const currentUser = userStorage.get();

  const isLoggedIn = currentUser ? true : false;
  return isLoggedIn;
};
