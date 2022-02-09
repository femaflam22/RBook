import axios from "axios";

const state = () => ({});

const mutations = {};

const actions = {
    show({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/reader/' + id)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_LOADING', false, { root: true })
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    store({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/reader/', payload)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    updateReader({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.patch('/reader/' + id)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};