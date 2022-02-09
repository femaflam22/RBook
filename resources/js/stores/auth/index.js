import axios from "axios";
import router from '../../router'

const state = () => ({});

const mutations = {

};

const actions = {
    register({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/register', payload)
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
    login({ commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.post('/login', payload)
                .then((response) => {
                    let data = response.data;
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
                    localStorage.setItem('token', data.access_token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    commit('SET_USER', data.user, { root: true });
                    commit('SET_GOOD', null, { root: true });
                    resolve(response.data);
                    router.push({ name: 'home' });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    logout({ commit }) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/logout')
                .then((response) => {
                    commit('CLEAR_ERROR', null, { root: true });
                    commit('SET_USER', {}, { root: true });
                    localStorage.clear();
                    delete axios.defaults.headers.common['Authorization'];
                    resolve();
                    commit('SET_LOADING', false, { root: true })
                    router.push({ name: 'login' });
                })
                .catch((error) => {
                    commit('SET_ERROR', error.response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
                })
        })
    },
    getMe({ commit }) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            axios.get('/me')
                .then((response) => {
                    resolve(response.data);
                    commit('SET_USER', response.data, { root: true });
                    commit('SET_LOADING', false, { root: true })
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