/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueAxios from 'vue-axios';
import router from './router.js'
import store from './store.js'
import App from './App.vue'
import axios from 'axios'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$http.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = window.location.origin + '/api/auth/rbook';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    if (error.response.status === 401) {
        router.push({ name: 'login' })
    }
    // Do something with request error
    return Promise.reject(error);
});

if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
};

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
};

Vue.filter('updatedDays', function(date) {
    if(date) {
        let convertDate = convertTZ(date, "Asia/Jakarta");
        return convertDate.toDateString() + ' ' + convertDate.getHours() + ':' + convertDate.getMinutes() + ':' + convertDate.getSeconds();
    }else {
        return '-';
    }
});

Vue.filter('numFormatter', function(num) {
    if(num > 999 && num < 1000000){
        // convert to K for number from > 1000 < 1 million
        return (num/1000).toFixed(1) + 'K';
    }else if(num > 1000000){
        // convert to M for number from > 1 million
        return (num/1000000).toFixed(1) + 'M'; 
    }else if(num < 900){
        // if value < 1000, nothing to do
        return num; 
    }
})

new Vue({
    router,
    store,
    components: { App },
}).$mount("#app");