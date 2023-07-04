import { defineStore } from 'pinia';
import type User from '@/api/models/User';

const useAuthStore = defineStore('auth', {
  state: (): {
    authorized: boolean | null;
    user: User | null;
  } => {
    return {
      authorized: null,
      user: null,
    };
  },
  actions: {
    setUser(user: User | null): void {
      if (this.user != null && user != null) {
        Object.assign(this.user, user);
      } else {
        this.user = user;
      }
    },
    setAuthorized(authorized: boolean): void {
      this.authorized = authorized;
    },
  },
});

export default useAuthStore;
