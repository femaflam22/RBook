<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="row">
        <sidebar :selected="1"></sidebar>
        <div class="col-md-9 my-lg-0 my-1">
            <div id="main-content" class="bg-white border">
                <div class="my-3">
                <div class="col-md-12">
                    <!-- Column -->
                    <div class="card"> 
                        <img class="card-img-top" :src="profile.url_header" alt="Card image cap">
                        <div class="card-body little-profile text-center">
                            <div class="pro-img">
                                <img :src="profile.url_image" alt="user">
                            </div>
                            <div>
                            <h3 class="m-b-0 text-capitalize">{{ data.name }}</h3>
                            </div>
                            <div class="row text-center m-t-20">
                                <div class="col-4 m-t-20 user-info">
                                    <h3 class="m-b-0 font-light">5454</h3><small>Mengikuti</small>
                                </div>
                                <div class="col-4 m-t-20 user-info">
                                    <h3 class="m-b-0 font-light">14</h3><small>Karya</small>
                                </div>
                                <div class="col-4 m-t-20 user-info">
                                    <h3 class="m-b-0 font-light">434K</h3><small>Pengikut</small>
                                </div>
                            </div>
                            <div class="alert alert-danger mb-4" v-if="errorMessage">
                                {{ errorMessage }}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import userSidebar from '../../components/SidebarUser.vue';
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'UserIndex',
    components: {
        "sidebar": userSidebar
    },
    data() {
        return {
            data: {},
            profile: {}
        }
    },
    created(){
        this.me();
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading']),
    },
    methods: {
        ...mapActions('auth', ['getMe']),
        ...mapActions('user', ['detail']),

        me() {
            this.getMe().then((result) => {
                this.data = result.user;
                this.getData(this.data.id);
            });
        },
        getData(id) {
            this.detail(id).then((result) => {
                this.profile = result.data[0];
            })
        }
    }
}
</script>

<style scoped>
.container{
    padding-top: 80px;
    padding-bottom: 40px;
}

#main-content {
    padding: 30px;
    border-radius: 15px
}

.card-img-top {
    height: 300px
}

.card-no-border .card {
    border-color: #d7dfe3;
    border-radius: 4px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05)
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem
}

.pro-img {
    margin-top: -80px;
    margin-bottom: 20px
}

.little-profile .pro-img img {
    width: 128px;
    height: 128px;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 100%
}

html body .m-b-0 {
    margin-bottom: 0px
}

h3 {
    line-height: 30px;
    font-size: 21px
}

html body .m-t-10 {
    margin-top: 10px
}

.m-t-20 {
    margin-top: 20px
}

.text-center {
    text-align: center !important
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #455a64;
    font-weight: 400
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

@media (max-width: 770px) {
    .little-profile .pro-img img{
        width: 100px;
        height: 100px;
    }
    .card-img-top {
        height: 200px
    }
}

@media (max-width: 500px){
    #main-content {
        padding: 20px
    }
    .little-profile .pro-img img{
        width: 80px;
        height: 80px;
    }
    .card-img-top {
        height: 150px
    }
    .btn-rounded.btn-md{
        padding: 8px 12px;
        font-size: 14px;
    }
    h3{
        font-size: 16px;
    }
    #sidebar ul li a .link{
        font-size: 13px;
    }
    #sidebar ul li a .link-desc{
        font-size: 11px;
    }
    .h4{
        font-size: 16px;
    }
}

@media (max-width: 420px){
    #main-content {
        padding: 0
    }
    .user-info h3{
        font-size: 16px;
    }
    .user-info small{
        font-size: 10px;
    }
}
</style>