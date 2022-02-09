import axios from "axios";
import router from '../../router';

const state = () => ({});

const mutations = {

};

const actions = {
    create({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/library/', payload)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                    router.push({ name: 'library.index' });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    check({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/library/check', payload)
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
    index({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/library/' + id)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
        })
    },
    update({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.patch('/library/' + payload.id, payload.data)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
        })
    },
    deleteFromAuthor({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.delete('/library/book/' + id)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
        })
    },
    delete({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.delete('/library/' + id)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true });
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