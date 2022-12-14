import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { Provider } from '../../firebase/types';
import userStorage from '../../userStorage';

interface AuthStore {
  userState: User | null;
  login: (provider: Provider) => void;
  logout: () => void;
  setUserState: (newState: User) => void;
}

// console.log('userStorage.get()', userStorage.get());

export const useAuthStore = create<AuthStore>()(
  devtools((set, get) => ({
    userState: userStorage.get(),
    login: async (provider) => {
      const { user } = await signInWithPopup(auth, provider);
      return set(({ userState }) => ({
        userState: { ...user },
      }));
    },
    logout: async () => {
      await auth.signOut();
      return set(({ userState }) => ({ userState: null }));
    },
    setUserState: (newState) => set(() => ({ userState: { ...newState } })),
  })),
);
