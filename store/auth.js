// store/auth.js
export const state = () => ({
    isAuthenticated: false,
});

export const mutations = {
    SET_AUTH(state, status) {
        state.isAuthenticated = status;
    },
};

export const actions = {
    login({ commit }, password) {
        if (password === '1234') {
            commit('SET_AUTH', true);
            return true;
        } else {
            return false;
        }
    },
    logout({ commit }) {
        commit('SET_AUTH', false);
    },
};
