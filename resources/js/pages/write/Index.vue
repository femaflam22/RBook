<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="row">
        <sidebar :selected="3"></sidebar>
        <div class="col-md-9 my-lg-0 my-1">
            <div id="main-content" class="bg-white border">
                <div class="alert alert-danger mb-4" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
                <div class="row d-flex justify-content-center my-2">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="d-flex justify-content-between align-items-center"> 
                                <span class="font-weight-bold">Daftar Tulisan</span>
                                <router-link v-bind:to="{name: 'write_book.add'}">
                                <button class="btn btn-purple text-white"><i class="fa fa-plus mr-2"></i>Tambah</button>
                                </router-link>
                            </div>
                            <div class="mt-3 inputs"> 
                                <i class="fa fa-search"></i> 
                                <input type="text" class="form-control " placeholder="Cari judul buku..."> 
                            </div>
                            <div v-if="books.length < 1">
                                <div class="pt-5">
                                    <img src="http://127.0.0.1:8000/assets/img/homework.png" class="d-block m-auto" width="70">
                                    <p class="mt-2 text-center text-empty">kamu belum membuat cerita apapun</p>
                                </div>
                            </div>
                            <div v-else class="mt-3" v-for="(book,index) in books" :key="index">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row align-items-center">   
                                        <span class="book" v-if="book.status == 'completed'"><i class="fas fa-book yellow"></i></span>
                                        <span class="book" v-if="book.status == 'onGoing'"><i class="fas fa-book purple"></i></span>
                                        <div class="d-flex flex-column"> 
                                            <router-link v-bind:to="{name: 'write_book.detail', params: {id: book.id}}" class="text-dark">
                                            <span class="book-title">{{book.title}}</span>
                                            </router-link>
                                            <div class="d-flex flex-row align-items-center time-text"> 
                                                <small class="book-genre">{{book.category_name}}</small> 
                                                <span class="dots"></span> 
                                                <small>Dibuat pada {{book.created_at | updatedDays}}</small> 
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="d-flex">
                                        <span class="content-text content-text-1" v-if="book.status == 'completed'"><i class="fas fa-check"></i></span>
                                        <span class="content-text content-text-2" v-else-if="book.status == 'onGoing'"><i class="fas fa-keyboard"></i></span>
                                        <span class="content-text delete ml-1"><i class="fas fa-trash-alt" :data="book.category_id" :id="book.id" @click="deleteBook"></i></span>
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
import userSidebar from '../../components/SidebarUser.vue';
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'UserWriterList',
    components: {
        "sidebar": userSidebar
    },
    data() {
        return {
            books: [],
        }
    },
    created() {
        this.getBooks();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('books', ['show', 'delete']),
        ...mapActions('categories', ['subtract']),
        ...mapActions('libraries', ['deleteFromAuthor']),
        ...mapActions('chapters', ['deleteAllChapter']),

        getBooks() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.show(user.id).then((result) => {
                this.books = result.data;
            });
        },
        deleteBook(e) {
            let category = e.target.getAttribute("data");
            let id = e.target.id;
            this.delete(id).then(() => {
                this.subtract(category).then(() => {
                    this.deleteAllChapter(id).then(() => {
                        this.deleteFromAuthor(id).then(() => {
                            this.getBooks();
                        });
                    });
                });
            })
        }
    },
}
</script>

<style scoped>
.container{
    padding-top: 80px;
    padding-bottom: 40px;
}

#main-content {
    padding: 30px;
    border-radius: 15px;
}

.btn {
    border-radius: 25px;
}

.new {
    font-size: 12px;
}

.card {
    padding: 20px;
    border: none;
}

.inputs {
    position: relative;
}

.form-control {
    text-indent: 15px;
    border: none;
    height: 45px;
    border-radius: 0px;
    border-bottom: 1px solid #eee;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #eee;
    outline: 0;
    box-shadow: none;
    border-bottom: 1px solid blue;
}

.form-control:focus {
    color: blue;
}

.inputs i {
    position: absolute;
    top: 14px;
    left: 4px;
    color: #b8b9bc;
}

.book {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    margin-right: 10px;
    border-radius: 5px;
}

.time-text {
    font-size: 12px;
    color: #989898;
}

.dots {
    height: 7px;
    width: 7px;
    background-color: #eee;
    display: flex;
    border-radius: 50%;
    margin-left: 7px;
    margin-right: 7px;
}

.yellow {
    color: #ffab2e;
}

.purple {
    color: #572ce8;
}

.content-text {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: 700;
}

.content-text-1 {
    background-color: #ffe7cc;
    color: #ffa03a;
}

.content-text-2 {
    background-color: #572ce86b;
    color: #572ce8;
}

.delete {
    background-color: #f0b0b0;
    color: #ec2f2f;
}

@media (max-width: 500px){
    #main-content {
        padding: 20px;
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
        padding: 0;
    }
    .content-text{
        width: 25px;
        height: 25px;
        font-size: 10px;
    }
    .btn{
        font-size: 11px;
    }
    .book-title{
        font-size: 13px;
    }
    .book{
        width: 30px;
        height: 30px;
    }
    .dots{
        margin-left: 4px;
        margin-right: 4px;
    }
}

@media (max-width: 320px){
    .dots{
        display: none;
    }
    .book-genre{
        display: none;
    }
}
</style>