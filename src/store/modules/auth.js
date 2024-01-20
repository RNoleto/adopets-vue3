

const state = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const mutations = {
  setAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
    localStorage.setItem('isAuthenticated', isAuthenticated);
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },
};

const actions = {
  login({ commit }, credentials) {
    // Simule uma chamada de API para autenticação (substitua isso pela sua lógica real)
    // Exemplo: const user = await AuthService.login(credentials);
    const user = { id: 1, name: 'Usuário de Exemplo' };

    // Atualize o estado de autenticação e salve o usuário no localStorage
    commit('setAuthenticated', true);
    commit('setUser', user);
  },
  register({ commit }, userData) {
    // Simule uma chamada de API para registro (substitua isso pela sua lógica real)
    // Exemplo: const user = await AuthService.register(userData);
    const user = { id: 2, name: userData.fullName };

    // Atualize o estado de autenticação e salve o usuário no localStorage
    commit('setAuthenticated', true);
    commit('setUser', user);
  },
  logout({ commit }) {
    // Limpe o estado de autenticação e remova o usuário do localStorage
    commit('setAuthenticated', false);
    commit('setUser', null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  },
};

export default {
  state,
  mutations,
  actions,
};
