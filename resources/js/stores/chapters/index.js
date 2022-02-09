import axios from "axios";
import router from '../../router';

const state = () => ({});

const mutations = {

};

const actions = {
    create({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/chapter/', payload)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                    router.push({ name: 'write_book.detail', params: {id: response.data.book} });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    show({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/chapter/all/' + id)
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
    detail({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/chapter/' + payload.book + '/part/' + payload.part)
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
            axios.patch('/chapter/' + payload.id, payload.data)
                .then((response) => {
                    resolve(response.data);
                    commit('SET_GOOD', null, { root: true });
                    commit('SET_LOADING', false, { root: true });
                    router.push({ name: 'write_book.detail', params: {id: response.data.book} });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true });
                })
        })
    },
    deleteAllChapter({ commit }, id) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.delete('/chapter/book/' + id)
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
            axios.delete('/chapter/' + id)
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