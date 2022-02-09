<template>
<div class="container">
    <div class="spinner" v-if="isLoading"></div>
    <div class="row">
        <sidebar :selected="2"></sidebar>
        <div class="col-md-9 my-lg-0 my-1">
            <div id="main-content" class="bg-white border">
                <div class="mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <div class="alert alert-danger mb-4" v-if="errorMessage">
                                {{ errorMessage }}
                            </div>
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                                    <li class="nav-item"> 
                                        <a data-toggle="pill" href="#profil-saya" class="nav-link active" id="profile"> 
                                            <i class="fas fa-info-circle mr-2"></i> Profil Saya 
                                        </a> 
                                    </li>
                                    <li class="nav-item"> 
                                        <a data-toggle="pill" href="#tab-edit" class="nav-link" id="edit-profile"> 
                                            <i class="fas fa-user-edit mr-2"></i> Edit Profil 
                                        </a> 
                                    </li>
                                    <li class="nav-item"> 
                                        <a data-toggle="pill" href="#tab-header" class="nav-link" id="edit-header"> 
                                            <i class="fas fa-image mr-2"></i> Edit Latar 
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div id="tab-profile" class="tab-pane fade show active pt-3">
                                    <div class="form-group"> 
                                        <label><h6>Email</h6></label> 
                                        <input type="email" :value="data.email" class="form-control" disabled> 
                                    </div>
                                    <div class="form-group"> 
                                        <label><h6>Nama</h6></label> 
                                        <input type="text" :value="data.name" class="form-control" disabled> 
                                    </div>
                                    <div class="d-flex flex-column mb-3"> 
                                        <h6 class="mb-2">Foto Profil</h6> 
                                        <img :src="profile.url_image" alt="Foto Profil" width="100">
                                    </div>
                                </div>
                                <div id="tab-edit" class="tab-pane fade pt-3">
                                    <h5 class="pb-2 my-3 text-center font-weight-bold">Edit Info Profil Anda</h5>
                                    <div class="form-group"> 
                                        <label><h6>Ubah foto profil</h6></label> 
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
                                    <div class="form-group"> 
                                        <label><h6>Nama</h6></label> 
                                        <input type="text" class="form-control" :class="{'is-invalid': errors.name}" v-model="data.name"> 
                                        <div class="invalid-feedback" v-if="errors.name">
                                            {{ errors.name[0] }}
                                        </div>
                                    </div>
                                    <p> <button type="button" class="btn btn-purple text-white" @click.prevent="updateProfile">Simpan Perubahan</button> </p>
                                </div>
                                <div id="tab-header" class="tab-pane fade pt-3">
                                    <div class="form-group"> 
                                        <label><h6>Edit latar belakang profil anda</h6></label> 
                                        <file-pond
                                            name="header"
                                            ref="pond"
                                            allow-multiple="false"
                                            accepted-file-types="image/jpeg, image/png"
                                            :class="{'is-invalid': errors.image}"
                                            v-bind:files="myHeaderFiles"
                                            v-bind:server="myHeaderServer"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <p> <button type="button" class="btn btn-purple text-white" @click.prevent="updateHeader"> Simpan Perubahan</button> </p>
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
// FilePond
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

// sidebar
import userSidebar from '../../components/SidebarUser.vue';

// vuex
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: "editUser",
    components: {
        FilePond,
        "sidebar": userSidebar
    },
    data() {
        var _this = this;
        return {
            data: {},
            profile: {},
            myFiles:[],
            myServer: {
                process : {
                    url : '/api/auth/rbook/upload',
                    method : 'POST',
                    ondata:(formData) => {
                        formData.append('form', 'profiles');
                        return formData;
                    },
                    onload : function(response){
                        if(response){
                            _this.profile.image = response;
                            return response;
                        }
                    }
                },
                revert : {
                    url : '/api/auth/rbook/delete',
                    method : 'DELETE',
                    headers : {
                        '_form': 'profiles', 
                    },
                    onload : function(response){
                        _this.profile.image = '';
                    }
                }
            },
            myHeaderFiles:[],
            myHeaderServer: {
                process : {
                    url : '/api/auth/rbook/upload-header',
                    method : 'POST',
                    ondata:(formData) => {
                        formData.append('form', 'headers');
                        return formData;
                    },
                    onload : function(response){
                        if(response){
                            _this.profile.header = response;
                            return response;
                        }
                    }
                },
                revert : {
                    url : '/api/auth/rbook/delete',
                    method : 'DELETE',
                    headers : {
                        '_form': 'headers', 
                    },
                    onload : function(response){
                        _this.profile.header = '';
                    }
                }
            },
        }
    },
    created(){
        this.me();
        this.getProfile();
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading']),
    },
    methods: {
        ...mapActions('auth', ['getMe']),
        ...mapActions('user', ['detail', 'update', 'updateUser']),

        me() {
            this.getMe().then((result) => {
                this.data = result.user;
            });
        },
        getProfile() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.detail(user.id).then((result) => {
                this.profile = result.data[0];
                this.myFiles = [{source: result.data[0].url_image}];
                this.myHeaderFiles = [{source: result.data[0].url_header}];
            })
        },
        changeTab() {
            let tab2 = document.getElementById("edit-profile");
            tab2.classList.toggle("active");
            let tab1 = document.getElementById("profile");
            tab1.classList.toggle("active");
            let tabPane2 = document.getElementById("tab-edit");
            tabPane2.classList.toggle("active");
            tabPane2.classList.toggle("show");
            let tabPane1 = document.getElementById("tab-profile");
            tabPane1.classList.toggle("active");
            tabPane1.classList.toggle("show");
        },
        updateProfile() {
            let payload = {id: this.profile.id, data: this.profile};
            let userData = {id: this.data.id, data: this.data};
            this.update(payload).then(() => {
                this.updateUser(userData).then(() => {
                    this.me();
                    this.getProfile();
                    this.changeTab();
                });
            });
        },
        updateHeader() {
            let payload = {id: this.profile.id, data: this.profile};
            this.update(payload).then(() => {
                this.me();
                this.getProfile();
                this.changeTab();
            });
        }
    }
}
</script>

<style scoped>
.container{
    padding-top: 80px;
    padding-bottom: 40px;
}

#main-content {
    padding: 30px;
    border-radius: 15px
}

.rounded {
    border-radius: 1rem
}

.nav-pills .nav-link {
    color: #555
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background-color: #463fac;
}

.nav-pills .nav-link.active {
    color: white
}

input[type="radio"] {
    margin-right: 5px
}

.bold {
    font-weight: bold
}

@media (max-width: 500px){
    #main-content {
        padding: 20px
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
        padding: 0
    }
}
</style>