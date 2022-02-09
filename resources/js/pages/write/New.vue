<template>
<div class="edit-wrap px-5">
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
                <div class="card-body">
                    <div class="form-group mb-3">
                        <label>Judul Buku</label>
                        <input type="text" class="form-control" :class="{'is-invalid': errors.title}" placeholder="Masukkan Judul Buku" v-model="data.title">
                        <div class="invalid-feedback" v-if="errors.title">
                            {{ errors.title[0] }}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Deskripsi Buku</label>
                        <textarea class="form-control" :class="{'is-invalid': errors.description}" rows="8" placeholder="Masukkan deskripsi buku" v-model="data.description"></textarea>
                        <div class="invalid-feedback" v-if="errors.description">
                            {{ errors.description[0] }}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Genre</label>
                        <v-select :options="options" :reduce="name => name.id" label="name" v-model="data.category_id" :class="{'is-invalid': errors.category_id}">
                        </v-select>
                        <div class="invalid-feedback" v-if="errors.category_id">
                            {{ errors.category_id[0] }}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Status</label>
                        <select class="form-control" :class="{'is-invalid': errors.status}" v-model="data.status">
                            <option value="onGoing">On going</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors.status">
                            {{ errors.status[0] }}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Sampul Buku</label>
                        <file-pond
                            name="image"
                            :class="{'is-invalid': errors.image}"
                            ref="pond"
                            allow-multiple="false"
                            accepted-file-types="image/jpeg, image/png"
                            v-bind:files="myFiles"
                            v-bind:server="myServer"
                        />
                        <div class="invalid-feedback" v-if="errors.image">
                            {{ errors.image[0] }}
                        </div>
                    </div>
                    <button type="button" class="btn btn-orange text-white mt-2" @click.prevent="createBook">Buat Buku</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// FilePond
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

// select2
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// vuex
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: "addBook",
    components: {
        FilePond,
        "v-select": vSelect
    },
    data() {
        var _this = this;
        return{
            options: [],
            data: {
                title: '',
                description: '',
                user_id: null,
                category_id: null,
                status: 'onGoing',
                image: ''
            },
            books: [],
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
        this.getOptions();
        this.getBooks();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('categories', ['index', 'update']),
        ...mapActions('books', ['create', 'show']),
        ...mapActions('readers', ['store']),

        getOptions() {
            this.index().then((result) => {
                this.options = result.data;
            })
        },
        getBooks() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.show(user.id).then((result) => {
                this.books = result.data;
                console.log(this.books);
            });
        },
        createBook() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.data.user_id = user.id;
            this.create(this.data).then((result) => {
                this.createReader(result.data);
            });
        },
        createReader(id) {
            let payload = {book_id: id, total_reader: 0};
            this.store(payload).then(() => {
                this.updateCategory();
            });
        },
        updateCategory() {
            this.update(this.data.category_id).then(() => {});
        }
    },
}
</script>

<style>
.edit-wrap{
    padding-top: 100px;
    padding-bottom: 30px;
}
</style>