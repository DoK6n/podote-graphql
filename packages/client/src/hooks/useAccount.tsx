import { useEffect } from 'react';
import { auth } from '../lib/firebase/firebaseClient';
import { useAuthStore } from '../lib/store/auth';

export function useAccount() {
  const { login } = useAuthStore();

  useEffect(() => {
    auth.onAuthStateChanged((fbUser) => {
      if (fbUser) {
        login(fbUser);
      }
    });
  }, []);
}
