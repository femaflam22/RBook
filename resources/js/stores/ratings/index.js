import axios from "axios";
import router from '../../router';

const state = () => ({});

const mutations = {};

const actions = {
    show({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/rating/' + id)
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
    create({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/rating/', payload)
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
    update({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/rating/' + payload.id, payload.data)
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