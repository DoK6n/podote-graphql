import { User } from 'firebase/auth';

// firebase auth에서 생성되는 로컬스토리지 key name
const key = `firebase:authUser:${import.meta.env.VITE_API_KEY}:[DEFAULT]`;

const userStorage = {
  get() {
    const data = localStorage.getItem(key);
    try {
      if (!data) return null;
      const parsed = JSON.parse(data) as User;
      return parsed;
    } catch (e) {
      localStorage.removeItem(key);
      return null;
    }
  },
  set(user: User) {
    localStorage.setItem(key, JSON.stringify(user));
  },
  clear() {
    localStorage.removeItem(key);
  },
};

export default userStorage;
