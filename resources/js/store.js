import Vue from 'vue'
import Vuex from 'vuex'

//IMPORT MODULE SECTION
import auth from './stores/auth/index.js'
import categories from './stores/categories/index.js'
import user from './stores/users/index.js'
import books from './stores/books/index.js'
import libraries from './stores/libraries/index.js'
import chapters from './stores/chapters/index.js'
import ratings from './stores/ratings/index.js'
import readers from './stores/readers/index.js'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        auth,
        categories,
        user,
        books,
        libraries,
        chapters,
        ratings,
        readers
    },
    state: {
        errors: [],
        errorMessage: '',
        isLoading: false,
        isRegistered: false,
        user: {},
    },
    getters: {
        isLogged: state => !!state.user
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_LOADING(state, payload) {
            state.isLoading = payload;
        },
        SET_REGISTERED(state, payload) {
            state.isRegistered = payload;
        },
        SET_GOOD(state, payload) {
            state.isLoading = false;
            state.errorMessage = '';
            state.errors = '';
        },
        SET_ERROR(state, payload) {
            state.isLoading = false;
            state.errorMessage = Array.isArray(payload.message) ? payload.message[0] : payload.message;
            state.errors = !payload.errors ? [] : payload.errors;
        },
        CLEAR_ERROR(state) {
            state.errors = []
            state.errorMessage = ''
            state.isLoading = false
        }
    },
    strict: false
});

export default store;