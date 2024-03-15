import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    loginUser(user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
  getters: {
    getUser() {
      return this.user;
    }
  }
})
