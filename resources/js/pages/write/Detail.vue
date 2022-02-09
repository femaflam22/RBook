<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="alert alert-danger mb-4" v-if="errorMessage">
        {{ errorMessage }}
    </div>
    <div class="d-flex justify-content-between mb-3">  
        <router-link v-bind:to="{name: 'write_book.index'}">
            <i class="fas fa-arrow-left text-muted ml-1 mb-3"></i>
        </router-link>
        <div></div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="media mb-4" id="media">
                    <a href="#" @click="showModalImage = true"><strong class="text-fade">Edit Sampul Cerita</strong></a>
                </div>
                <div class="card-body">
                    <p class="font-weight-bold mb-3">*kamu dapat edit data terkait buku ini</p>
                    <h5 class="card-title"><a href="#" class="text-dark" @click="showModal = true">Judul Cerita</a></h5>
                    <p class="card-text">{{data.title}}</p>
                    <h5 class="card-title"><a href="#" class="text-dark" @click="showModalDesc = true">Deskripsi Cerita</a></h5>
                    <p class="desc-text">{{data.description}}</p>
                    <h5 class="card-title"><a href="#" class="text-dark" @click="showModalGenre = true">Genre Cerita</a></h5>
                    <p class="card-text text-capitalize">{{data.category_name}}</p>
                    <h5 class="card-title"><a href="#" class="text-dark" @click="showModalStatus = true">Status</a></h5>
                    <p class="card-text" v-if="data.status == 'onGoing'">On Going</p>
                    <p class="card-text" v-else>{{data.status}}</p>
                    <hr>
                    <h5 class="card-title">Daftar Isi</h5>
                    <p v-if="chapters.length < 1" class="card-text text-dark mb-3 part-list font-weight-bold">
                        kamu belum membuat isi cerita
                    </p>
                    <p v-else v-for="(chapter,index) in chapters" :key="index" class="card-text text-muted mb-3 part-list">
                        <i class="fas fa-trash-alt text-danger mr-3" @click="deleteChapter(chapter.id)"></i>
                        <span class="font-weight-bold text-dark">
                        <a href="#" class="text-dark text-capitalize"><router-link v-bind:to="{name: 'write_book.part.edit', params: {id: data.id, part:chapter.id}}" class="text-dark">Part {{index+1}} : {{chapter.name}}</router-link></a>
                        </span>
                        <span class="part-book">diperbarui pada {{chapter.updated_at | updatedDays}}</span>
                    </p>
                </div>
                <div class="card-body">
                    <router-link v-bind:to="{name: 'write_book.part.add', params: {id: data.id, part: createChapter}}">
                        <a href="#" class="card-link text-purple">Tambah Bagian Baru</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!-- modal -->

    <modal v-if="showModal" @close="showModal = false" :action="edit">
        <h5 slot="header">Edit Judul Cerita</h5>
        <div slot="body">
            <div class="form-group">
                <label>Judul</label>
                <input type="text" class="form-control" v-model="data.title" :class="{'is-invalid': errors.title}">
                <div class="invalid-feedback" v-if="errors.title">
                    {{ errors.title[0] }}
                </div>
            </div>
        </div>
    </modal>

    <modal v-if="showModalDesc" @close="showModalDesc = false" :action="edit">
        <h5 slot="header">Edit Deskripsi Cerita</h5>
        <div slot="body">
            <div class="form-group">
                <label>Deskripsi</label>
                <textarea class="form-control" rows="8" v-model="data.description" :class="{'is-invalid': errors.description}"></textarea>
                <div class="invalid-feedback" v-if="errors.description">
                    {{ errors.description[0] }}
                </div>
            </div>
        </div>
    </modal>

    <modal v-if="showModalGenre" @close="showModalGenre = false" :action="edit">
        <h5 slot="header">Edit Genre Cerita</h5>
        <div slot="body">
            <div class="form-group">
                <label>Genre</label>
                <v-select :options="options" :reduce="name => name.id" label="name" v-model="data.category_id" :class="{'is-invalid': errors.category_id}">
                </v-select>
                <div class="invalid-feedback" v-if="errors.category_id">
                    {{ errors.category_id[0] }}
                </div>
            </div>
        </div>
    </modal>

    <modal v-if="showModalStatus" @close="showModalStatus = false" :action="edit">
        <h5 slot="header">Edit Status Cerita</h5>
        <div slot="body">
            <div class="form-group">
                <label>Status</label>
                <select class="form-control" v-model="data.status" :class="{'is-invalid': errors.status}">
                    <option value="onGoing">On going</option>
                    <option value="completed">Completed</option>
                </select>
                <div class="invalid-feedback" v-if="errors.status">
                    {{ errors.status[0] }}
                </div>
            </div>
        </div>
    </modal>

    <modal v-if="showModalImage" @close="showModalImage = false" :action="edit">
        <h5 slot="header">Edit Sampul Cerita</h5>
        <div slot="body">
            <div class="form-group">
                <label>Sampul</label>
                <file-pond
                    name="image"
                    ref="pond"
                    allow-multiple="false"
                    accepted-file-types="image/jpeg, image/png"
                    :class="{'is-invalid': errors.image}"
                    v-bind:files="myFiles"
                    v-bind:server="myServer"
                />
                <div class="invalid-feedback" v-if="errors.image">
                    {{ errors.image[0] }}
                </div>
            </div>
        </div>
    </modal>
</div>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

// vuex
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';

// modal
import modalComponent from '../../components/Modal.vue';

// select2
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    name: "editBook",
    components: {
        FilePond,
        "modal" : modalComponent,
        "v-select": vSelect
    },
    data() {
        return {
            data: {},
            chapters: [],
            createChapter: null,
            showModal: false,
            showModalDesc: false,
            showModalGenre: false,
            showModalStatus: false,
            showModalImage: false,
            myFiles:[],
            myServer: {
                process : {
                    url : '/api/auth/rbook/upload',
                    method : 'POST',
                    ondata:(formData) => {
                        formData.append('form', 'books');
                        return formData;
                    },
                    onload : function(response){
                        if(response){
                            _this.data.image = response;
                            return response;
                        }
                    }
                },
                revert : {
                    url : '/api/auth/rbook/delete',
                    method : 'DELETE',
                    headers : {
                        '_form': 'books', 
                    },
                    onload : function(response){
                        _this.data.image = '';
                    }
                }
            },
        }
    },
    created() {
        this.getBookDetail();
        this.getOptions();
        this.getChapters();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('books', ['detail', 'update']),
        ...mapActions('categories', ['index']),
        ...mapActions('chapters', ['show', 'delete']),

        getOptions() {
            this.index().then((result) => {
                this.options = result.data;
            })
        },
        getBookDetail() {
            this.detail(this.$route.params.id).then((result) => {
                this.data = result.data[0];
                this.myFiles = [{source: result.data[0].url_image}];
                let media = document.getElementById("media");
                let url = "url('" + this.data.url_image + "')";
                media.style.backgroundImage = url;
            })
        },
        edit() {
            let payload = {id: this.data.id, data: this.data};
            this.update(payload).then(() => {
                this.getBookDetail();
                this.showModal = false;
                this.showModalDesc = false;
                this.showModalGenre = false;
                this.showModalStatus = false;
                this.showModalImage = false;
            })
        },
        getChapters() {
            this.show(this.$route.params.id).then((result) => {
                this.chapters = result.data;
                this.newChapter();
            })
        },
        newChapter() {
            let chapters = this.chapters.length;
            let newChapter = null;
            if(chapters > 0) {
                newChapter = chapters+1;
            }else {
                newChapter = 1;
            };
            this.createChapter = newChapter;
        },
        deleteChapter(id) {
            this.delete(id).then(() => {
                this.getChapters();
            })
        }
    },
}
</script>

<style scoped>
.container{
    padding-top: 100px;
}

.card {
    background: #fff;
    border-width: 0;
    border-radius: .25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    margin-bottom: 1.5rem;
}

.card-body p:last-child {
    margin-bottom: 0;
}

.card-hide-body .card-body {
    display: none;
}

.media{
    /* background: #a5aebd linear-gradient(45deg, #939497, #bfcacc); */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 200px;
}

.media a{
    margin: auto;
    color: #fff;
    font-size: 16px;
    
}

.card-text, .desc-text{
    font-size: 14px;
}

.part-book{
    font-size: 12px;
}

@media (max-width: 550px){
    .card-title{
        font-size: 16px;
    }
    .media{
        height: 150px;
    }
    .card-text, .desc-text{
        font-size: 12px;
    }
}

@media (max-width: 370px){
    .part-list{
        display: flex;
        flex-direction: column;
    }
    .desc-text{
        font-size: 11px;
    }
    .card-title{
        font-size: 14px;
    }
}
</style>