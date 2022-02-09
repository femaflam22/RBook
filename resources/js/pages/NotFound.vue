<template>
  <div class="container">
      <div class="pb-0 mb-0 justify-content-center text-light empty">
        <div class="row justify-content-center">
            <div class="col text-center">
                <div class="border-0">
                    <div class="card-body">
                        <div class="card-title">
                            <h3 class="mb-2 text-dark">404, Page Not Found!</h3>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-4 col">
                                <img src="http://127.0.0.1:8000/assets/img/not-found.png" class="mt-2" width="200">
                                <br>
                                <p class="text-dark mt-2">Halaman tidak ditemukan, pastikan route yang anda masukkan benar atau kembali ke halaman beranda.</p> 
                                <router-link v-bind:to="{name: 'home'}">
                                <a class="btn btn-cream text-muted border-0 my-2">
                                    <b>Kembali</b>
                                </a>
                                </router-link>
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
export default {

}
</script>

<style scoped>
.container{
    padding-top: 100px;
}

@media (max-width: 575px){
    .empty{
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