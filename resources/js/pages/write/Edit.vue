<template>
<div class="edit-wrap px-5">
    <div class="d-flex justify-content-between mb-3">  
        <router-link v-bind:to="{name: 'write_book.detail', params: {id: 1}}">
        <i class="fas fa-arrow-left text-muted ml-1 mb-3"></i>
        </router-link>
        <div></div>
    </div>
    <div class="spinner" v-if="isLoading"></div>
    <div class="alert alert-danger mb-4" v-if="errorMessage">
        {{ errorMessage }}
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="alert alert-warning mb-2">apabila upload gambar, pastikan gambar berukuran kecil</div>
                    <div class="form-group mb-3">
                        <label>Judul Chapter</label>
                        <input type="text" class="form-control" placeholder="Masukkan Judul Chapter" v-model="data.name">
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                    <ckeditor :editor="editor" v-model="data.content" :config="editorConfig"></ckeditor>
                    <div class="invalid-feedback" v-if="errors.content">
                        {{ errors.content[0] }}
                    </div>
                    <button type="button" class="btn btn-orange text-white mt-2" @click.prevent="edit">Simpan</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor.js';
import UploadAdapter from './uploadadapter';

// vuex
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'editChapter',
    data() {
        return {
            data: {},
            editor: ClassicEditor,
            editorConfig: {
                toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'insertTable', '|', 'imageUpload', 'mediaEmbed', '|', 'undo', 'redo' ],
                table: {
                    toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                },
                extraPlugins: [this.uploader],
            },
        }
    },
    created() {
        this.getChapter();
    },
    computed: {
        ...mapState(['errors', 'errorMessage', 'isLoading']),
    },
    methods: {
        ...mapActions('chapters', ['update', 'detail']),

        uploader(editor)
        {
            editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                return new UploadAdapter( loader );
            };
        },
        getChapter() {
            let payload = {book: this.$route.params.id, part: this.$route.params.part};
            this.detail(payload).then((result) => {
                this.data = result.data[0];
            });
        },
        edit() {
            let payload = {id: this.$route.params.part, data: this.data};
            this.update(payload).then(() => {});
        }
    }
}
</script>

<style>
.edit-wrap{
    padding-top: 100px;
    padding-bottom: 30px;
}
.ck-editor__editable {
    height: 100vh;
}
</style>