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
            <button class="btn btn-primary btn-lg"><small>Already signed up?</small><router-link v-bind:to="{name: 'login'}"><u class="text-white">&nbsp;Log in</u></router-link> </button>
        </div>
        <div class="card two bg-white px-5 py-4 mb-3">
            <div class="form-group">
                <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="mail" v-model="data.email">
                <label class="form-control-placeholder" for="mail">Email</label>
                <div class="invalid-feedback" v-if="errors.email">
                    {{errors.email[0]}}
                </div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="name" v-model="data.name">
                <label class="form-control-placeholder" for="name">Name</label>
                <div class="invalid-feedback" v-if="errors.name">
                    {{errors.name[0]}}
                </div>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" :class="{'is-invalid': errors.password}" id="password" v-model="data.password">
                <label class="form-control-placeholder" for="password">Password</label>
                <div class="invalid-feedback" v-if="errors.password">
                    {{errors.password[0]}}
                </div>
            </div> 
            <button class="btn btn-primary btn-block btn-lg mt-1 mb-2" @click.prevent="store"><span>Get Started<i class="fas fa-long-arrow-alt-right ml-2"></i></span></button>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'register',
    data() {
        return {
            data: {
                email: '',
                name: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading']),
    },
    methods: {
        ...mapMutations(['SET_LOADING']),
        ...mapActions('auth', ['register']),
        ...mapActions('user', ['create']),

        store() {
            let payload = {image: 'user.png', header: 'header.jpg'};
            this.register(this.data).then(() => {
                this.create(payload).then(() => {});
            });
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

.btn-primary {
    border: none;
    background: #463fac;
    margin-bottom: 40px;
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