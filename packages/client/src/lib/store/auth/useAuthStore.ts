import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { User } from 'firebase/auth';
import userStorage from '../../userStorage';

interface AuthStore {
  userState: User | null;
  login: (newState: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    subscribeWithSelector((set, get) => ({
      userState: userStorage.get(),
      login: (newUserState) => set(() => ({ userState: { ...newUserState } })),
      logout: () => {
        return set(({ userState }) => ({ userState: null }));
      },
    })),
  ),
);

useAuthStore.subscribe(
  (state) => state.userState,
  (previousSelectedState) =>
    console.log('[subscribe]has user ➜', previousSelectedState ? true : false),
);
