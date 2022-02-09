<template>
<div class="container mt-5 mb-5">
    <div class="spinner" v-if="isLoading"></div>
    <div class="alert alert-danger mb-4" v-if="errorMessage">
        {{ errorMessage }}
    </div>

    <div v-if="books.length < 1" class="pb-0 mb-0 justify-content-center text-light empty">
        <div class="row justify-content-center">
            <div class="col text-center">
                <div class="border-0">
                    <div class="card-body">
                        <div class="card-title">
                            <h3 class="mb-2 text-dark">Perpustakaanmu masih kosong!</h3>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-4 col">
                                <p class="small color-text">Segera mulai membaca buku dengan menambahkan buku ke dalam perpustakaanmu sekarang</p> 
                                <router-link v-bind:to="{name: 'category.books.index', params:{id: 1}}">
                                <button type="button" class="btn btn-primary border-0 my-2">
                                    <b>Tambahkan Buku</b>
                                </button>
                                </router-link>
                                <br> 
                                <img src="http://127.0.0.1:8000/assets/img/books.png" class="mt-2" width="200">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="d-flex flex-wrap justify-content-center list">
        <div class="card p-3 mb-3" v-for="(book,index) in books" :key="index">
            <div class="d-flex flex-column">
                <div class="ms-2 c-details mb-3">
                    <h6 class="mb-0">{{book.book_name}}</h6>
                </div>
                <img :src="book.url_image" class="image">
            </div>
            <div class="mt-4"> 
                <div class="d-flex justify-content-end">
                    <router-link v-if="book.last_chapter == 0" v-bind:to="{name: 'library.detail', params: {id: book.id, book: book.book_id, part: 1}}">
                        <div class="badge"> 
                            <a href="#">lanjut baca</a>
                        </div>
                    </router-link>
                    <router-link v-else v-bind:to="{name: 'library.detail', params: {id: book.id, book: book.book_id, part: book.last_chapter}}">
                        <div class="badge"> 
                            <a href="#">lanjut baca</a>
                        </div>
                    </router-link>
                    <i class="fas fa-trash-alt text-danger delete" @click="deleteBook(book.id)"></i>
                </div> 
                <div class="mt-1"> 
                    <span class="text1">terbaca {{book.last_chapter}} chapter <span class="text2">dari {{chapters[index]}} chapter</span></span> 
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: "libraryIndex",
    data() {
        return {
            books: [],
            chapters: []
        }
    },
    created() {
        this.getBooks();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('libraries', ['index', 'delete']),
        ...mapActions('chapters', ['show']),

        getBooks() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.index(user.id).then((result) => {
                this.books = result.data;
                let array = [];
                for (let i = 0; i < this.books.length; i++) {
                    this.show(this.books[i].book_id).then((result) => {
                        array.push(result.data.length);
                    });
                    this.chapters = array;
                };
            });
        },
        deleteBook(id) {
            this.delete(id).then(() => {
                this.getBooks();
            })
        }
    },
}
</script>

<style scoped>
.container{
    padding: 80px 0;
}

.card {
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
}

.badge{
    display: flex;
    justify-content: flex-end;
}

.badge a {
    background-color: #ebc633;
    text-decoration: none;
    width: auto;
    height: auto;
    padding:  5px 10px;
    border-radius: 5px;
    color: #fffbec;
    margin-right: 10px;
    font-size: 14px;
}

.delete {
    font-size: 18px;
    padding-top: 5px;
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}

.image{
    width: 100px;
    height: 160px;
    margin: auto;
}

p {
    font-size: 12px;
    display: flex;
}

.color-text {
    color: #757575 !important
}

button {
    font-size: 12px;
    background-color: #ebc633 !important;
    text-align: center;
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

@media (max-width: 575px){
    .empty{
        margin-left: 15px;
    }
    .list{
        padding-left: 15px;
        margin-left: 15px;
    }
}

@media (max-width: 380px){
    h3{
        font-size: 20px;
    }
    .empty img{
        width: 150px;
    }
}

@media (max-width: 340px){
    h3{
        font-size: 16px;
    }
    p{
        font-size: 11px;
    }
    .empty img{
        width: 120px;
    }
}
</style>