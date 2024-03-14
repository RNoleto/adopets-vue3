import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null
  }),
  actions: {
    loginUser(user) {
      this.user = user
    }
  },
  getters: {
    getUser() {
      return this.user
    }
  }
})
