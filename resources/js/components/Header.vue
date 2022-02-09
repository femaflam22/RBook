<template>
  <div class="dashboard-header">
    <nav class="navbar navbar-expand bg-white fixed-top"> 
        <router-link v-bind:to="{name: 'home'}">
        <a class="navbar-brand" href="#">
            <img src="http://127.0.0.1:8000/assets/img/r.png" class="mr-2"><span class="title">Books</span>
        </a> 
        </router-link>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span> 
        </button> -->
        <!-- <div class="collapse navbar-collapse " id="navbarSupportedContent"> -->
            <ul class="navbar-nav ml-auto navbar-right-top">
                <li class="nav-item dropdown connection"> 
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-fw fa-th"></i> 
                    </a>
                    <ul class="dropdown-menu dropdown-menu-left connection-dropdown">
                        <li class="connection-list">
                        <div class="notification-title">Categori Buku</div>
                            <div class="row">
                                <div class="col-4" v-for="(category,index) in categoriesData" :key="index"> 
                                    <router-link v-bind:to="{name: 'category.books.index', params: {id: category.id}}">
                                    <a href="#" class="connection-item" v-if="index <= 2">
                                        <img :src="category.url_image" :alt="category.image"> <span class="text-capitalize">{{category.name}}</span>
                                    </a> 
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4" v-for="(category,index) in categoriesData" :key="index"> 
                                    <router-link v-bind:to="{name: 'category.books.index', params: {id: category.id}}">
                                    <a href="#" class="connection-item" v-if="index >= 3 && index <= 5">
                                        <img :src="category.url_image" :alt="category.image"> <span class="text-capitalize">{{category.name}}</span>
                                    </a> 
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4" v-for="(category,index) in categoriesData" :key="index"> 
                                    <router-link v-bind:to="{name: 'category.books.index', params: {id: category.id}}">
                                    <a href="#" class="connection-item" v-if="index >= 6 && index <= 8">
                                        <img :src="category.url_image" :alt="category.image"> <span class="text-capitalize">{{category.name}}</span>
                                    </a> 
                                    </router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="nav-item"> 
                    <router-link v-bind:to="{name: 'library.index'}">
                    <a class="nav-link nav-icons" href="#">
                        <i class="fas fa-bookmark"></i>
                    </a>
                    </router-link>
                </li>
                <li class="nav-item dropdown"> 
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        <i class="fas fa-align-right"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                        <li v-if="books.length < 1">
                            <div class="mt-3">
                                <img src="http://127.0.0.1:8000/assets/img/homework.png" class="d-block m-auto" width="70">
                                <p class="mt-2 text-center text-empty">kamu belum membuat cerita apapun</p>
                            </div>
                        </li>
                        <li v-else v-for="(book,index) in books" :key="index">
                            <div class="d-flex px-3 py-2">
                                <img :src="book.url_image" class="img-book">
                                <div class="ml-3">
                                    <p class="font-weight-bold">{{book.title}}</p>
                                    <router-link v-bind:to="{name: 'write_book.detail', params: {id: book.id}}">
                                    <a href="#" class="text-dark" v-if="book.status == 'onGoing'">lanjut menulis</a>
                                    </router-link>
                                </div>
                            </div>
                        </li>
                        <hr>
                        <li class="px-3 mb-2">
                            <router-link v-bind:to="{name: 'write_book.index'}">
                            <a href="#" class="text-dark font-weight-bold"><i class="far fa-eye mr-2"></i>tampilkan / buat cerita</a>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown notification"> 
                    <a class="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-fw fa-bell"></i> 
                        <span class="indicator"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                        <li class="notif">
                            <div class="notification-title">Notifikasi</div>
                            <div class="notification-list">
                                <div class="list-group"> 
                                    <a href="#" class="list-group-item list-group-item-action active">
                                        <div class="notification-info">
                                            <div class="notification-list-user-img"><img src="https://img.icons8.com/office/100/000000/administrator-male.png" alt="" class="user-avatar-md rounded-circle"></div>
                                            <div class="notification-list-user-block"><span class="notification-list-user-name">Gaza</span>mengomentari buku anda, komentar pada chapter 2 Bukan Cinderella. <div class="notification-date">2 min ago</div>
                                            </div>
                                        </div>
                                    </a> 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-footer"> 
                                <router-link v-bind:to="{name: 'notif', params: {id: 1}}">
                                <a href="#">lihat semua...</a>
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="nav-item nav-user"> 
                    <router-link v-bind:to="{name: 'user.index'}">
                    <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img :src="profile.url_image" alt="" class="user-avatar-md rounded-circle">
                    </a>
                    </router-link>
                </li>
            </ul>
        <!-- </div> -->
    </nav>
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'headerComponent',
    data() {
        return {
            categoriesData : [],
            books: [],
            profile: {}
        }
    },
    created() {
        this.getData();
        this.getBooks();
        this.getProfile();
    },
    methods: {
        ...mapActions('categories', ['index']),
        ...mapActions('books', ['show']),
        ...mapActions('user', ['detail']),

        getData() {
            this.index().then((result) => { 
                this.categoriesData = result.data;
            });
        },
        getBooks() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.show(user.id).then((result) => {
                this.books = result.data;
            });
        },
        getProfile() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.detail(user.id).then((result) => {
                this.profile = result.data[0];
            });
        }
    }
}
</script>

<style scoped>
.dashboard-header .navbar {
    padding: 0px;
    border-bottom: 1px solid #e6e6f2;
    -webkit-box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
    box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
    transition: all 0.3s ease;
    min-height: 60px
}

.navbar-brand {
    display: inline-block;
    margin-right: 1rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 11px 20px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    color: #d96a26;
}

.navbar-brand img {
    width: 35px;
}

.navbar-right-top .nav-item {
    border-right: 1px solid #e6e6f2
}

.navbar-right-top .nav-item:last-child {
    border: none
}

.navbar-right-top .nav-item .nav-link {
    padding: 13px 20px;
    font-size: 16px;
    line-height: 2;
    color: #82849f
}

.notification-dropdown {
    min-width: 320px
}

.notification-dropdown,
.connection-dropdown,
.nav-user-dropdown {
    padding: 0px;
    margin: 0px
}

.notification-title {
    font-size: 14px;
    color: #3d405c;
    text-align: center;
    padding: 8px 0px;
    border-bottom: 1px solid #e3e3e3;
    line-height: 1.5;
    background-color: #fffffe
}

.notification-list .list-group-item {
    border-radius: 0px;
    padding: 12px;
    margin-top: -1px;
    border-left: transparent;
    border-right: transparent
}

.notification-list .list-group-item.active {
    z-index: 2;
    color: #3d405c;
    background-color: #f7f7fb;
    border-color: #e1e1e7
}

.notification-list .list-group-item-action:focus,
.list-group-item-action:hover {
    color: #404040;
    text-decoration: none;
    background-color: #f7f7fb
}

.notification-info .notification-date {
    display: block;
    font-size: 11px;
    margin-top: 4px;
    text-transform: uppercase;
    color: #71748d
}

.notification .dropdown-toggle::after,
.connection .dropdown-toggle::after,
.nav-user .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border: none
}

.notification-list-user-img {
    float: left
}

.notification-list-user-block {
    padding-left: 50px;
    font-size: 14px;
    line-height: 21px
}

.notification-list-user-name {
    color: #5969ff;
    font-size: 14px;
    margin-right: 8px
}

.list-footer,
.conntection-footer {
    font-size: 14px;
    color: #fff;
    text-align: center;
    padding: 10px 0px;
    line-height: 1.5;
    font-weight: 700;
    background-color: #463fac;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px
}

.list-footer a,
.conntection-footer a {
    color: #fff
}

.list-footer a:hover,
.conntection-footer a:hover {
    color: #fff
}

.indicator {
    content: '';
    position: absolute;
    top: 16px;
    right: 23px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: #ef172c;
    animation: .9s infinite beatHeart;
    transform-origin: center
}

@keyframes beatHeart {
    0% {
        transform: scale(0.9)
    }

    25% {
        transform: scale(1.1)
    }

    40% {
        transform: scale(0.9)
    }

    60% {
        transform: scale(1.1)
    }

    100% {
        transform: scale(0.9)
    }
}

.connection-list {
    width: 300px;
    padding: 20px
}

.connection-item {
    border-radius: 3px;
    line-height: 32px;
    text-align: center;
    padding: 12px 7px 4px;
    display: block;
    border: 1px solid transparent;
    color: #3d405c;
    font-size: 12px
}

.connection-item img {
    width: 32px
}

.connection-item:hover {
    background-color: #fff;
    border: 1px solid #e6e6f2
}

.connection-item span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.nav-user-dropdown {
    padding: 0px;
    min-width: 230px;
    margin: 0px
}

.nav-user-info {
    background-color: #6962f7;
    line-height: 1.4;
    padding: 12px;
    color: #fff;
    font-size: 13px;
    border-radius: 2px 2px 0 0
}

.nav-user-dropdown .dropdown-item {
    display: block;
    width: 100%;
    padding: 12px 22px 15px;
    clear: both;
    font-weight: 400;
    color: #686972;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-size: 13px;
    line-height: 0.4
}

.nav-user-dropdown .dropdown-item:hover {
    background-color: #f7f7fb
}

.user-avatar-xxl {
    height: 128px;
    width: 128px
}

.user-avatar-xl {
    height: 90px;
    width: 90px
}

.user-avatar-lg {
    height: 48px;
    width: 48px
}

.user-avatar-md {
    height: 32px;
    width: 32px
}

.user-avatar-sm {
    height: 24px;
    width: 24px
}

.user-avatar-xs {
    height: 18px;
    width: 18px
}

.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid #F7F9FA;
    background: #F7F9FA;
    color: #fff
}

.media-attachment div.avatar {
    border: none
}

.avatar.bg-primary {
    display: flex;
    align-items: center;
    justify-content: center
}

.avatar.bg-primary i {
    font-size: 14px
}

.nav-user-name{
    font-size: 16px;
}

.img-book{
    max-width: 70px;
    width: 100%;
    height: 100px;
    object-fit: cover;
}

@media (max-width: 470px){
    .title{
        display: none;
    }
    /* .notif{
        display: none;
    } */
    .notification-dropdown {
        min-width: 250px
    }
    .notification-list-user-block{
        font-size: 11px;
    }
    .notification-list-user-name{
        font-size: 12px;
    }
}
@media (max-width: 400px){
    /* .navbar-brand{
        display: none;
    } */
    .navbar-brand{
        margin-right: 5px;
        padding: 6px 5px 6px 15px;
    }
    .navbar-brand img{
        width: 25px;
    }
    .nav-user-img img{
        width: 25px;
        height: 25px;
    }
    i{
        font-size: 12px;
    }
    .connection-list{
        width: 250px;
        padding: 15px;
    }
    .connection-item{
        padding: 10px 5px 2px;
    }
    .connection-item img{
        width: 25px;
    }
    .text-empty {
        font-size: 0.6rem;
    }
}
@media (max-width: 330px){
    .navbar-brand{
        margin-right: 0;
        padding: 6px 0 6px 10px;
    }
    .connection-list{
        padding: 10px;
    }
    .navbar-brand img{
        width: 18px;
    }
    .nav-user-img img{
        width: 18px;
        height: 18px;
    }
    i{
        font-size: 10px;
    }
}
</style>