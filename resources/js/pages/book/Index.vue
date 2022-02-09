<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="alert alert-danger mb-4" v-if="errorMessage">
        {{ errorMessage }}
    </div>
    <div class="top mb-4">
        <h4 class="text-uppercase">{{category}}</h4>
    </div>
    <div class="mt-3" v-if="books.length < 1">
        <img src="http://127.0.0.1:8000/assets/img/research.png" class="d-block m-auto" width="150">
        <h5 class="mt-2 text-center">buku untuk kategori ini masih kosong :(</h5>
    </div>
    <div class="row" v-else>
        <div class="col-lg-12 order-lg-0 order-2">
            <div class="wrap d-flex books" v-for="(book,index) in books" :key="index">
                <div class="mb-4"> 
                    <img class="" :src="book.url_image" alt="book cover"> 
                </div>
                <div class="mb-4">
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
                    <div>
                        <p class="text-capitalize fs5 my-3 fw-bolder">
                            <router-link v-bind:to="{name: 'category.books.detail', params: {id: $route.params.id, book: book.id}}"><a href="#" class="text-dark">{{book.title}}</a></router-link>
                        </p>
                        <p class="text-muted">
                        {{book.description}}
                        </p>
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
    name: "bookList",
    data() {
        return {
            books: [],
            category: null
        }
    },
    watch: {
        '$route.params.id': {
            handler: function() {
                this.getBooks();
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.getBooks();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('books', ['list']),

        getBooks() {
            this.list(this.$route.params.id).then((result) => {
                this.books = result.data;
                this.category = result.data[0].category_name;
            });
        }
    },
}
</script>

<style scoped>
.container {
    padding: 20px;
}

.top{
    border-bottom: solid 1px black;
    padding-top: 80px;
    padding-bottom: 6px;
}

.wrap{
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
}

.books img {
    height: 200px;
    width: 140px;
    object-fit: cover;
    margin-right: 20px;
}

.text-muted {
    font-size: 14px;
    width:100%;
    height:115px;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-align: justify;
}

.fs5 {
    line-height: 20px;
    font-size: 20px;
}

.items {
    font-size: 15px;
    background-color: black;
    color: white;
    margin: 3px 3px;
    padding: 4px 10px;
    text-decoration: none;
    border: 1px solid #ddd
}

.items:hover {
    background-color: #fcf7f7;
    color: black;
    transition: background-color .8s
}

@media (max-width: 600px){
    .wrap{
        width: 95%;
        margin-left: 10px;
        margin-bottom: 5px;
        padding: 0 10px;
    }
    .text-muted{
        font-size: 12px;
        height: 80px;
        -webkit-line-clamp: 4;
    }
    .books img{
        height: 150px;
        width: 100px;
    }
    .fs5{
        font-size: 16px;
        line-height: 10px;
    }
    i, span{
        font-size: 11px;
    }
}
@media (max-width: 390px){
    .wrap{
        padding: 0 5px;
    }
    .text-muted{
        height: 60px;
        font-size: 10px;
    }
    .fs5{
        line-height: 5px;
        font-size: 14px;
    }
    .books img{
        height: 120px;
        width: 80px;
        margin-right: 10px;
    }
    .top h4{
        font-size: 16px;
    }
}
</style>