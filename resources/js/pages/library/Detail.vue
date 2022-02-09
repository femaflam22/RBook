<template>
<div class="wrapper">
    <div class="spinner" v-if="isLoading"></div>
    <nav id="sidebar" class="active">
        <div class="sidebar-header">
            <h3>{{bookName}}</h3>
            <hr>
        </div>
        <ul class="list-unstyled components">
            <li v-for="(chapter,index) in chapters" :key="index"> 
                <router-link v-bind:to="{name: 'library.detail', params: {id: $route.params.id, book: $route.params.book, part: chapter.id}}">
                <a href="#" class="text-capitalize">Part {{index+1}} - {{chapter.name}}</a>
                </router-link> 
            </li>
        </ul>
    </nav>
    <div class="content">
        <div class="alert alert-danger mb-4" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="d-flex justify-content-between back">  
            <router-link v-bind:to="{name: 'library.index'}">
            <i class="fas fa-arrow-left text-muted ml-1 mb-3"></i>
            </router-link>
            <div></div>
        </div>
        <nav class="navbar"> 
            <div class="d-flex align-items-center">
            <button type="button" id="sidebarCollapse" class="btn btn-cream"> 
                <i class="far fa-list-alt"></i> 
            </button>
            <p class="pt-3 ml-2" @click="showChapter">lihat chapter</p>
            </div>
        </nav>
        <div class="content-wrapper" id="content">
            <div class="d-flex justify-content-between content-header pb-3 mb-3">
                <i class="far fa-star text-orange"></i>
                <!-- <i class="fas fa-star text-orange"></i> -->
                <router-link v-bind:to="{name: 'library.comments', params: {id:2, part: 2}}">
                <i class="far fa-comments text-yellow"></i>
                </router-link>
            </div>
            <h3 class="my-4 text-center text-capitalize">{{chapter.name}}</h3>
            <div id="content-text" class="text-justify"></div>
        </div>
    </div>
</div>
</template>

<script>
$(document).ready(function(){
    $("#sidebarCollapse").on('click', function(){
        $("#sidebar").toggleClass('active');
    });
});

import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'readBook',
    data() {
        return {
            chapters: [],
            bookName: null,
            chapter: {}
        }
    },
    watch: {
        '$route.params.part': {
            handler: function() {
                this.changeCurrentChapter();
                this.currentChapter();
                this.editReader();
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.getChapters();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('chapters', ['show', 'detail']),
        ...mapActions('libraries', ['update']),
        ...mapActions('readers', ['updateReader']),

        getChapters() {
            this.show(this.$route.params.book).then((result) => {
                this.chapters = result.data;
                this.bookName = result.data[0].book_name;
                this.currentChapter();
            });
        },
        showChapter() {
            document.getElementById('sidebar').toogleClass('active');
        },
        changeCurrentChapter() {
            let user = JSON.parse(localStorage.getItem('user'));
            let data = {
                user_id: user.id,
                book_id: this.$route.params.book,
                last_chapter: this.$route.params.part
            }
            let payload = {id: this.$route.params.id, data: data};
            this.update(payload).then(() => {});
        },
        currentChapter() {
            let payload = {book: this.$route.params.book, part: this.$route.params.part};
            this.detail(payload).then((result) => {
                this.chapter = result.data[0];
                var content = document.getElementById("content-text");
                content.innerHTML = this.chapter.content;
            });
        },
        editReader() {
            this.updateReader(this.$route.params.book).then(() => {});
        }
    }
}
</script>

<style scoped>

.back{
    margin-left: 35px;
    margin-top: 20px;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s
}

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    padding-top: 60px;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    color: #333;
    transition: all 0.3s;
    overflow-y: scroll;
}

#sidebar.active {
    margin-left: -250px
}

#sidebar .sidebar-header {
    padding: 20px;
}

#sidebar .sidebar-header h3{
    font-size: 18px;
    font-weight: bold;
}

#sidebar ul.components {
    padding-left: 10px;
}

#sidebar ul p {
    padding: 10px;
    font-size: 15px;
    display: block;
    color: #fff
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1em;
    display: block
}

#sidebar ul li a:hover {
    color: #333;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #333;
    background: #fff;
}

a[data-toggle="collapse"] {
    position: relative
}

#content {
    width: 100%;
    padding: 0 35px 15px 35px;
    transition: all 0.3s;
}

/* #content-text {
    max-width: 1000px;
    overflow-x: hidden;
    width: 100%;
    display: block;
    margin: auto;
} */

.content-wrapper i {
    font-size: 20px;
}

.content-wrapper p {
    font-size: 14px;
    text-align: justify;
    text-indent: 3em;
}

.content-wrapper img{
    width: 50%;
    display: block;
    margin: 20px auto;
}

.content-header{
    border-bottom: 1px solid #dadada;
}

.navbar {
    background: transparent;
    box-shadow: none;
    margin-left: 25px;
    margin-bottom: 20px;
}

@media (max-width: 435px){
    #content{
        padding: 0 20px 15px 20px;
    }
    .navbar{
        margin-left: 0;
    }
}
</style>