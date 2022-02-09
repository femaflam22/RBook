<template>
  <div class="my-3">
    <div class="spinner" v-if="isLoading"></div>
    <div class="col-md-12">
        <!-- Column -->
        <div class="card"> 
            <img class="card-img-top" :src="profile.url_header" alt="Card image cap">
            <div class="card-body little-profile text-center">
                <div class="pro-img">
                    <img :src="profile.url_image" alt="user">
                </div>
                <div>
                    <h3 class="m-b-0">{{data.name}}</h3>
                </div>
                <a class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" v-if="data.id != $route.params.id">Ikuti</a>
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
                <div class="alert alert-danger my-4" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
            </div>
            <div class="content" v-if="books.length >= 1">
                <div class="row">
                    <div class="col">
                        <div class="wraper">
                            <div class="book_container">
                                <div class="item d-flex flex-column" v-for="(book,index) in books" :key="index">
                                    <div class="image">
                                        <img :src="book.url_image" alt="book cover">
                                    </div>
                                    <div class="book_content">
                                        <div class="mt-4 text-center title">
                                            <router-link v-bind:to="{name: 'category.books.detail', params: {id: book.category_id, book: book.id}}"><a href="#" class="font-weight-bold text-dark">{{book.title}}</a></router-link>
                                        </div>
                                        <div class="d-flex justify-content-center mb-2 rate">
                                            <div class="d-flex align-items-center mr-2">
                                                <i class="fas fa-eye mr-1"></i>
                                                <span>333k</span>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa-star mr-1"></i>
                                                <span>33k</span>
                                            </div>
                                        </div>
                                        <div class="desc">{{book.description}}</div>
                                    </div>
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
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name:"userView",
    data() {
        return {
            data: {},
            profile: {},
            books: []
        }
    },
    created(){
        this.me();
        this.getData();
        this.getBooks();
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading']),
    },
    methods: {
        ...mapActions('user', ['detail', 'view']),
        ...mapActions('books', ['show']),

        me() {
            this.view(this.$route.params.id).then((result) => {
                this.data = result.data[0];
            });
        },
        getData() {
            this.detail(this.$route.params.id).then((result) => {
                this.profile = result.data[0];
            })
        },
        getBooks() {
            this.show(this.$route.params.id).then((result) => {
                this.books = result.data;
            });
        },
    }
}
</script>

<style scoped>

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

.btn-rounded.btn-md {
    padding: 10px 20px;
    font-size: 16px
}

html body .m-t-10 {
    margin-top: 10px
}

.btn-primary,
.btn-primary.disabled {
    background: #6962f7;
    border: 1px solid #6962f7;
}

.btn-rounded {
    border-radius: 60px;
    padding: 5px 15px;
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

.content {
    padding-bottom: 60px;
 }

.wraper {
    background-color: #fff;
    padding: 11px;
    border-top: solid 1px #dadada;
    margin-top: 16px;
    margin-bottom: 8px;
}

.book_container{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
}

.item {
    max-width: 250px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    background: #FFFFFF;
    border-radius: 2px;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.image {
    width: 150px;
    height: 180px;
    margin: auto;
}

.image img {
    display: block;
    max-width: 100%;
}

.book_content {
    width: 100%;
    margin-top: 25px;
}

.title a{
    font-size: 20px;
}

.rate{
    font-size: 12px;
}
.rate span{
    font-size: 11px;
}

.desc {
    font-size: 10px;
    width:100%;
    height:80px;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-align: justify;
}

@media (max-width: 1130px) {
    .book_container{
        justify-content: center;
    }
    .item{
        margin-right: 0;
        margin-bottom: 10px;
    }
}

@media (max-width: 500px){
    .card-img-top {
        height: 200px
    }
    .little-profile .pro-img img{
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 420px){
    .user-info h3{
        font-size: 16px;
    }
    .user-info small{
        font-size: 10px;
    }
}
</style>