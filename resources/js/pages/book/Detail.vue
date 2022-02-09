<template>
<div class="wraper d-flex justify-content-center align-items-center">
    <div class="spinner" v-if="isLoading"></div>
    <div class="card">
        <div class="d-flex justify-content-between">  
            <router-link v-bind:to="{name: 'category.books.index', params: {id: $route.params.id}}">
                <i class="fas fa-arrow-left text-muted mt-1"></i>
            </router-link>
            <div></div>
        </div>
        <div class="alert alert-danger mb-4" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="upper d-flex flex-column text-white"> 
            <img :src="book.url_image" class="rounded">
            <h5 class="mb-0 mt-2 font-weight-bold">{{book.title}}</h5> 
            <small>
                <router-link v-bind:to="{name: 'user.view', params: {id: book.user_id}}">
                    <a href="#" class="text-white">{{book.user_name}}</a>
                </router-link>
            </small>
        </div>
        <div class="down">
            <div class="desc-book">
                <div class="d-flex flex-row align-items-center">
                    <div class="box"> 
                        <span class="dots">
                            <a v-if="message == 'empty'" class="text-white" href="#" @click.prevent="add"><i class="fas fa-plus"></i></a>
                            <router-link v-else v-bind:to="{name: 'library.index'}"><a class="text-white" href="#"><i class="fas fa-bookmark"></i></a></router-link>
                        </span>
                    </div>
                    <div class="d-flex flex-column ml-3">
                        <h6 class="mb-0 font-weight-bold" v-if="message == 'empty'">Tambahkan ke perpustakaan</h6> 
                        <h6 class="mb-0 font-weight-bold" v-else>Telah ditambahkan ke perpustakaan</h6> 
                        <div class="d-flex align-items-center"> 
                            <div class="d-flex align-items-center mr-2">
                                <i class="fas fa-eye mr-1"></i>
                                <span>{{book.readers | numFormatter}}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-star mr-1"></i>
                                <span>300k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sinopsis"> 
                    <span class="d-block">{{book.description}}</span>
                    <!-- <router-link v-bind:to="{name: 'library.index'}">
                    <a href="#">baca selengkapnya</a>
                    </router-link> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: "bookDetail",
    data() {
        return {
            book: {},
            message: null
        }
    },
    created() {
        this.getBook();
        this.checkBook();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('books', ['detail']),
        ...mapActions('libraries', ['create', 'check']),

        getBook() {
            this.detail(this.$route.params.book).then((result) => {
                this.book = result.data[0];
            });
        },
        add() {
            let user = JSON.parse(localStorage.getItem('user'));
            let payload = {user_id: user.id, book_id: this.$route.params.book, last_chapter: 0};
            this.create(payload).then(() => {});
        },
        checkBook() {
            let user = JSON.parse(localStorage.getItem('user'));
            let payload = {user_id: user.id, book_id: this.$route.params.book};
            this.check(payload).then((result) => {
                this.message = result.message;
            });
        }
    },
}
</script>

<style scoped>
.wraper{
    padding-top: 100px;
}

.card {
    width: 500px;
    border: none;
    border-radius: 15px;
    padding: 8px;
    position: relative;
    height: auto;    
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 60px;
}

.card h5{
    letter-spacing: 5px;
}

.upper {
    background-color: #463fac;
    height: 360px;
    border-radius: 15px;
    z-index: 10;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.upper img{
    width: 100px;
    height: 160px;
}

.desc-book {
    width: 410px;
    height: auto;
    background-color: #fff;
    position: absolute;
    top: 340px;
    border-radius: 12px;
    left: 9%;
    z-index: 12;
    padding: 15px;
}

.down {
    background-color: #eeeff3;
    height: 480px;
    border-radius: 15px;
    margin-top: -14px;
}

.box {
    width: 50px;
    height: 50px;
    background-color: #463fac;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.dots {
    font-size: 15px;
}

.sinopsis {
    margin-top: 20px;
    height:380px;
    background-color: #f4f6fa;
    border-radius: 10px;
    padding: 12px
}

.sinopsis span {
    font-size: 11px;
    height:325px;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 17;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-align: justify;
}

.sinopsis a{
    color: #6962f7;
    font-size: 10px;
}

@media (max-width: 640px){
    .card{
        max-width: 350px;
        width: 100%;
    }
    .desc-book{
        max-width: 285px;
    }
    .down{
        height: 530px;
    }
    .sinopsis{
        height: 450px;
    }
    .sinopsis span{
        height: 405px;
    }
    .desc-book h6 {
        font-size: 14px;
    }
    .desc-book i {
        font-size: 12px;
    }
    .desc-book span {
        font-size: 11px;
    }
    .box{
        width: 35px;
        height: 35px;
    }
}

@media (max-width: 410px){
    .wraper{
        padding-left: 10px;
        padding-right: 10px;
    }
    .card{
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
    }
    .desc-book h6{
        font-size: 12px;
    }
}

@media (max-width: 360px){
    .desc-book{
        max-width: 270px;
    }
}

@media (max-width: 345px){
    .desc-book{
        max-width: 240px;
        left: 11%;
    }
}

@media (max-width: 320px){
    .desc-book{
        left: 10%;
    }
}
</style>