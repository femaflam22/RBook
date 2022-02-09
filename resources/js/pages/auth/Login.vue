<template>
  <div class="container d-flex justify-content-center">
    <div class="spinner" v-if="isLoading"></div>
    <div class="d-flex flex-column justify-content-between">
        <div class="card mt-3 p-5">
            <div class="logo mb-3"><img src="http://127.0.0.1:8000/assets/img/r.png"></div>
            <div>
                <p class="mb-1">Start reading all you want to read</p>
                <h4 class="mb-3 text-white">only with RBooks!</h4>
            </div> 
            <button class="btn btn-primary btn-lg"><small>Don't have any account?</small><router-link v-bind:to="{name: 'register'}"><u class="text-white">&nbsp;Sign in</u></router-link> </button>
            <div class="pb" v-if="!isRegistered"></div>
            <div class="bg-alert" v-if="isRegistered">Success registered acount! please login!</div>
        </div>
        <div class="card two bg-white px-5 py-4 mb-3">
            <div class="alert alert-danger mb-4" v-if="errorMessage">
                {{ errorMessage }}
            </div>
            <div class="form-group">
                <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="mail" v-model="data.email">
                <label class="form-control-placeholder" for="mail">Email</label>
                <div class="invalid-feedback" v-if="errors.email">
                    {{errors.email[0]}}
                </div>
            </div>
            <div class="form-group second-last">
                <input type="password" class="form-control" :class="{'is-invalid': errors.password}" id="password" v-model="data.password">
                <label class="form-control-placeholder" for="password">Password</label>
                <div class="invalid-feedback" v-if="errors.password">
                    {{errors.password[0]}}
                </div>
            </div> 
            <div class="form-group last form-check ml-2">
                <input type="checkbox" class="form-check-input" :class="{'is-invalid': errors.remember_me}" v-model="data.remember_me" id="remember_me">
                <label class="form-check-label" for="remember_me">Remember me</label>
                <div class="invalid-feedback" v-if="errors.remember_me">
                    {{errors.remember_me[0]}}
                </div>
            </div>
            <router-link v-bind:to="{name: 'forgot_password'}">
                <a href="#" class="pl-2"><small>Forgot password?</small></a>
            </router-link>
            <button class="btn btn-primary btn-block btn-lg mt-3 mb-2" @click.prevent="submit"><span>Start</span></button>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'login',
    data() {
        return {
            data: {
                email: '',
                password: '',
                remember_me: false
            }
        }
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading', 'isRegistered']),
    },
    methods: {
        ...mapMutations(['SET_LOADING']),
        ...mapActions('auth', ['login']),

        submit() {
            this.login(this.data).then(() => {});
        }
    }
}
</script>

<style scoped>
body {
    background-color: #EBEAEF;
}

.container {
    flex-wrap: wrap;
}

.card {
    border: none;
    border-radius: 10px;
    background-color: #6962f7;
    width: 350px;
    margin-top: -60px;
}

p.mb-1 {
    font-size: 25px;
    color: #9FB7FD;
}

.pb{
    margin-bottom: 20px;
}

.bg-alert {
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 40px;
    background: #fff;
    color: #463fac;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
}

.btn-primary {
    border: none;
    background: #463fac;
    margin-bottom: 20px;
}

.btn-primary small {
    color: #9FB7FD;
}

.btn-primary span {
    font-size: 13px;
}

.card.two {
    border-top-right-radius: 60px;
    border-top-left-radius: 0;
}

.form-group {
    position: relative;
    margin-bottom: 2rem;
}

.form-group.second-last{
    margin-bottom: 10px;
}

.form-group.last{
    margin-bottom: 0;
}

.form-control {
    border: none;
    border-radius: 0;
    outline: 0;
    border-bottom: 1.5px solid #E6EBEE;
}

.form-control:focus {
    box-shadow: none;
    border-radius: 0;
    border-bottom: 2px solid #8A97A8;
}

.form-control-placeholder {
    position: absolute;
    top: 15px;
    left: 10px;
    transition: all 200ms;
    opacity: 0.5;
    font-size: 80%;
}

.form-check-label{
    opacity: 0.7;
}

.form-control:focus+.form-control-placeholder,
.form-control:valid+.form-control-placeholder {
    font-size: 80%;
    transform: translate3d(0, -90%, 0);
    opacity: 1;
    top: 10px;
    color: #8B92AC;
}

.btn-block {
    border: none;
    border-radius: 8px;
    background-color: #5c5cdc;
    padding: 10px 0 12px;
}

.btn-block:focus {
    box-shadow: none;
}

.btn-block span {
    font-size: 15px;
    color: #D0E6FF;
}

u{
    font-size: 15px;
}
</style>