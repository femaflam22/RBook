<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="alert alert-danger mb-4" v-if="errorMessage">
        {{ errorMessage }}
    </div>
    <div class="card mx-auto">
        <div class="row">
            <div class="logo ml-3 mb-3">
                <img src="http://127.0.0.1:8000/assets/img/r.png">
            </div>
        </div>
        <div class="card-title">
            <p class="heading">RBook</p>
        </div>
        <p class="text-muted">Mulai impianmu menjadi seorang penulis dari sini. Kamu bisa mulai merancang dan mempublikasikan buku hasil karyamu, dan dapatkan kesempatan untuk penerbitan versi cetak untuk hasil karyamu...</p>
        <div class="d-flex my-4">
            <div class="w-auto mr-3">
                <button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Membuat Buku Bacaan</button>
            </div>
            <div class="w-auto mr-3">
                <button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Membaca Buku</button>
            </div>
            <div class="w-auto">
                <button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Kesempatan Diterbitkan</button>
            </div>
        </div>
        <div class="mutual"><i class="fas fa-users"></i>&nbsp;&nbsp;<span>{{users}} orang telah bergabung</span></div>
    </div>

    <div class="category-content bg-light rounded mx-auto">
        <div class="h4 font-weight-bold text-center py-3">Rekomendasi Genre</div>
        <div class="d-flex flex-wrap justify-content-center">
            <div class="w-box mb-3 mr-3" v-for="(category,index) in categories" :key="index">
                <div class="box bg-white">
                    <div class="d-flex align-items-center">
                        <div class="rounded-circle mr-3 ml-0 text-center d-flex align-items-center justify-content-center blue pale"> 
                            <img :src="category.url_image" alt="category"> 
                        </div>
                        <div class="d-flex flex-column"> 
                            <b>{{category.name}}</b> 
                            <a href="#">
                                <p class="text-muted text-book">{{category.book_total}} buku</p>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-light info mx-auto">
        <div class="row">
            <div class="col-sm-12 content-info py-3">
                <div class="panel-group" id="info-panel">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"> 
                                <a data-toggle="collapse" data-parent="#info-panel" href="#collapseTwoLeftone" aria-expanded="false" class="collapsed"> Tentang Kami </a> 
                            </h4>
                        </div>
                        <div id="collapseTwoLeftone" class="panel-collapse collapse" aria-expanded="false" role="tablist" style="height: 0px;">
                            <div class="panel-body"> RBooks merupakan situs membaca dan menulis daring, yang berdiri sejak tahun 2021. RBooks menawarkan pengalaman menarik bagi para pecinta dunia sastra. Kami memberi kesempatan kepada penulis untuk mempublikasikan hasil karyanya secara online yang dapat diakses oleh siapun dan dimanapun. Untuk hasil karya yang menarik dengan peminat yang banyak, akan mendapat kesempatan buku diterbitkan oleh penerbit mitra RBooks. Rasakan pengalaman dunia tulis dalam genggaman-mu! </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"> 
                                <a class="collapsed" data-toggle="collapse" data-parent="#info-panel" href="#collapseTwoLeftTwo" aria-expanded="false"> Bagaimana Cara Mempublikasikan Buku? </a> 
                            </h4>
                        </div>
                        <div id="collapseTwoLeftTwo" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                            <div class="panel-body"> Kamu dapat membuat karya tulismu sendiri dan dapat mempublikasikannya agar dapat dibaca oleh orang lain. Caranya cukup dengan :
                            <br><br>
                            <ul class="list-group text-dark">
                                <li class="list-group-item">1. Kunjungi tanda profil di navbar</li>
                                <li class="list-group-item">2. Klik "Daftar Tulisan" pada list kelola akun</li>
                                <li class="list-group-item">3. Klik tombol "Tambah"</li>
                                <li class="list-group-item">4. Lengkapi form yang tersedia</li>
                                <li class="list-group-item">5. Jika sudah lengkap dan sesuai, klik tombol "Buat Buku"</li>
                            </ul>
                            <br>
                                Kamu juga dapat mengelola daftar bab per-buku yang kamu buat ataupun mengedit detail buku maupun isi buku.
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"> 
                                <a class="collapsed" data-toggle="collapse" data-parent="#info-panel" href="#collapseTwoLeftThree" aria-expanded="false"> Pembaca Dapat Melakukan Apa Saja? </a> 
                            </h4>
                        </div>
                        <div id="collapseTwoLeftThree" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                            <div class="panel-body"> Kamu dapat menambahkan buku kedalam daftar bacaan pribadimu, yang nantinya dapat di akses dengan menekan ikon <strong>bookmark</strong>. Kamu dapat memberikan penilaian maupun komentar pada tiap-tiap bab buku sebagai bentuk dukungan kepada sang penulis.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rate-card mx-auto" v-if="ratingCheck == false">
        <div class="heading">
            <h3 class="font-weight-bold">Berikan penilai untuk kami!</h3>
            <p>Kami sangat berterima kasih apabila anda berkenan untuk memberikan penilaian atau saran kepada kami.</p>
        </div>
        <div class="ratings" id="ratings"> 
            <img @click="showForm" src="http://127.0.0.1:8000/assets/img/emoji/angry.png" id="1"> 
            <img @click="showForm" src="http://127.0.0.1:8000/assets/img/emoji/sad.png" id="2"> 
            <img @click="showForm" src="http://127.0.0.1:8000/assets/img/emoji/smile.png" id="3">
            <img @click="showForm" src="http://127.0.0.1:8000/assets/img/emoji/happy.png" id="4"> 
        </div>
        <div class="form-group d-none mt-4" id="form"> 
            <input type="text" class="form-control mb-3" id="rate" disabled>
            <label>Ulasan :</label>
            <textarea textarea class="form-control" rows="3" v-model="sendRating.description"></textarea>
            <div class="post-button"> 
                <button type="button" @click.prevent="send" class="btn btn-orange text-white mt-3">Kirim Penilaian</button>
            </div>
        </div>
    </div>    
    <div v-else class="rate-card mx-auto">
        <div class="heading">
            <h3 class="font-weight-bold">Terima kasih telah memberi penilaian!</h3>
            <p>Kami sangat berterima kasih atas penilaian dan ulasan anda, penilaian anda sangat berarti bagi kami.</p>
        </div>
        <div class="ratings d-flex justify-content-center">
            <div class="d-flex flex-wrap">
                <div class="selected">
                    <img :src="rating.url_image" class=" pt-3">
                </div>
                <p class="ml-2 text-justify desc"><small>{{rating.description}}</small></p>
            </div>
        </div>
    </div>    
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: "home",
    data() {
        return {
            users: null,
            categories: [],
            rating: {},
            ratingCheck: false,
            sendRating: {
                user_id: null,
                rating: null,
                description: '',
                image: ''
            }
        }
    },
    created() {
        this.getUsers();
        this.getCategories();
        this.getRating();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('user', ['index']),
        ...mapActions('categories', ['selectLimit']),
        ...mapActions('ratings', ['show', 'create']),

        showForm(event){
            document.getElementById("form").classList.remove("d-none");
            document.getElementById("form").classList.add("d-block");
            let rate = event.target.id;
            this.sendRating.rating = rate;
            document.getElementById("rate").value = "rate : " + rate;
        },
        getUsers() {
            this.index().then((result) => {
                this.users = result.data.length;
            })
        },
        getCategories() {
            this.selectLimit().then((result) => {
                this.categories = result.data;
            })
        },
        getRating() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.show(user.id).then((result) => {
                this.rating = result.data[0];
                if(result.data.length > 0){
                    this.ratingCheck = true;
                }
            })
        },
        send() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.sendRating.user_id = user.id;
            if(this.sendRating.rating == 4) {
                this.sendRating.image = 'happy.png';
            }else if(this.sendRating.rating == 3) {
                this.sendRating.image = 'smile.png';
            }else if(this.sendRating.rating == 2) {
                this.sendRating.image = 'sad.png';
            }else {
                this.sendRating.image = 'angry.png'
            }
            this.create(this.sendRating).then(() => {
                this.getRating();
            })
        }
    }
}
</script>

<style scoped>
.container{
    padding-top: 70px;
}

.logo img {
    width: 50px;
    height: 50px;
}

.card {
    display: block;
    padding: 30px 40px;
    border: none;
    margin-top: 5%;
    margin-bottom: 0;
    max-width: 800px;
}

.far {
    color: rgba(15, 198, 239, 0.97) !important;
    font-size: 16px !important;
}

p.heading {
    font-weight: bold;
    font-size: 25px;
}

p.text-muted {
    font-size: 15px;
    font-weight: bold;
    color: #a1a7ae !important;
}

.btn-sm {
    border-radius: 8px;
}

.fas.fa-users {
    color: rgba(15, 198, 239, 0.97) !important;
}

.mutual span {
    font-size: 14px;
    color: #adb5bd;
    font-weight: bold;
}

.btn-primary span {
    font-size: 14px;
    text-align: center;
    color: #fff;
    font-weight: bold
}

.category-content {
    padding: 20px;
    max-width: 800px;
}

.w-box{
    width: 200px;
}

.box {
    padding: 20px;
    transition: all .4s ease-in-out;
    cursor: pointer;
}

.box:hover {
    box-shadow: 2px 2px 10px #a5a5a5;
    transform: scale(1.03);
}

a:hover {
    text-decoration: none;
}

.pale img {
    object-fit: contain;
    width: 25px;
    height: 25px;
}

p.text-muted.text-book {
    margin: 0;
    font-size: 0.9rem;
}

b {
    font-size: 1.12rem;
}

.rounded-circle {
    width: 40px;
    height: 40px;
}

.blue {
    background-color: #bedcfa;
}

.info {
   margin-top: 0;
   margin-bottom: 20px;
   max-width: 800px;
}

.content-info .panel-group {
    margin-bottom: 0;
}

.content-info .panel {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 10px solid transparent;
    border-radius: 0;
    margin: 0;
}

.content-info .panel-default {
    border: 0;
}

.content-info .panel-default>.panel-heading {
    background: #3490dc;
    border-radius: 0px;
    border-color: #3490dc;
}

.accordion-wrap .panel-heading {
    padding: 0px;
    border-radius: 0px;
}

.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}

.content-info .panel .panel-heading a.collapsed {
    color: #999999;
    background-color: #fff;
    display: block;
    padding: 12px 20px;
}

.content-info .panel .panel-heading a {
    display: block;
    padding: 12px 20px;
    color: #fff;
}

.accordion-wrap .panel .panel-heading a {
    font-size: 14px;
}

.content-info .panel-group .panel-heading+.panel-collapse>.panel-body {
    border-top: 0;
    padding-top: 0;
    padding: 20px 20px 20px 30px;
    background: #3490dc;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
}

.content-info .panel .panel-heading a:after {
    content: "\2212";
    color: #463fac;
    background: #fff;
}

.content-info .panel .panel-heading a:after,
.content-info .panel .panel-heading a.collapsed:after {
    font-size: 14px;
    float: right;
    width: 21px;
    display: block;
    height: 21px;
    line-height: 21px;
    text-align: center;
    border-radius: 50%;
    color: #FFF;
}

.content-info .panel .panel-heading a.collapsed:after {
    content: "\2b";
    color: #fff;
    background-color: #DADADA;
}

.content-info .panel .panel-heading a:after {
    content: "\2212";
    color: #463fac;
    background: #dadada;
}

a:link {
    text-decoration: none;
}

.rate-card {
    max-width: 800px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 40px;
}

.rate-card h3 {
    font-weight: 300 !important;
    font-size: 21px;
}

.rate-card p {
    font-weight: 100 !important;
    font-size: 13px;
}

.ratings img {
    width: 50px;
    cursor: pointer;
    transition: all 0.5s;
}

.ratings img:hover {
    transform: scale(1.5);
}

.ratings .selected {
    max-width: 150px;
}

.ratings .desc {
    max-width: 400px;
    display: block;
    margin: auto;
}

@media (max-width: 520px) {
    .ratings .desc {
        max-width: 250px;
    }
}

@media (max-width: 500px){
    .card{
        padding: 30px 20px;
    }
    .logo img{
        width: 35px;
        height: 35px;
    }
    p.heading{
        font-size: 18px;
    }
    p.text-muted{
        font-size: 14px;
    }
    .btn-sm{
        font-size: 10px;
    }
    .mutual span{
        font-size: 12px;
    }
    .h4{
        font-size: 18px;
    }
    b{
        font-size: 0.9rem;
    }
    p.text-muted.text-book{
        font-size: 0.7rem;
    }
    .panel-title{
        font-size: 13px;
    }
    .content-info .panel-group .panel-heading+.panel-collapse>.panel-body{
        font-size: 12px;
    }
    .content-info .panel .panel-heading a:after,
    .content-info .panel .panel-heading a.collapsed:after {
        width: 19px;
        height: 19px;
        line-height: 18px;
    }
    .ratings img{
        width: 40px;
    }
    .rate-card .heading h3{
        font-size: 18px;
    }
    .rate-card .heading p{
        font-size: 11px;
    }
    .btn-orange{
        font-size: 11px;
    }
    textarea{
        font-size: 11px;
    }
}
</style>