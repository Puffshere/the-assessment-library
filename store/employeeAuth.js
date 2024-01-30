import axios from 'axios';


export const state = () => ({
    isAuthenticated: false,
});

export const mutations = {
    SET_AUTH(state, status) {
        state.isAuthenticated = status;
    },
};

export const actions = {
    async login({ commit }, password) {
        try {
            const response = await axios.post('/api/settings', { password: password });

            if (password === response.data.settings[0].hashedPassword) {
                commit('SET_AUTH', true);
                return true;
            } else {
                console.error("Error verifying password", error);
                return false;
            }

        } catch (error) { }

    },
    logout({ commit }) {
        commit('SET_AUTH', false);
    },
};