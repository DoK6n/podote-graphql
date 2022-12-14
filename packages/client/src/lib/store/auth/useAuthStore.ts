import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
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

export const useAuthStore = create<AuthStore>()(
  devtools(
    subscribeWithSelector((set, get) => ({
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
  ),
);

useAuthStore.subscribe(
  (state) => state.userState,
  (previousSelectedState) =>
    console.log('[subscribe]has user -', previousSelectedState ? true : false),
);
