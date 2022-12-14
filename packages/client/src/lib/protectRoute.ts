import userStorage from './userStorage';

export const checkIsLoggedIn = (request?: Request) => {
  const currentUser = userStorage.get();

  const isLoggedIn = currentUser ? true : false;
  return isLoggedIn;
};
