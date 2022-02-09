<template>
    <div class="container">
        <div class="card mx-auto">
            <div class="card-body text-center">
                <h4 class="card-title m-b-0">Notifikasi Anda</h4>
            </div>
            <div class="d-flex justify-content-center">
            <nav aria-label="breadcrumb" class="d-md-flex">
                <ol class="breadcrumb bg-white mb-5">
                    <li class="breadcrumb-item">
                        <a class="text-dark active-2" href="#"><span>Semua</span></a>
                    </li>
                    <li class="breadcrumb-item">
                        <a class="text-dark active-2" href="#"><span>Mengikuti</span></a>
                    </li>
                    <li class="breadcrumb-item">
                        <a class="text-dark active-2" href="#"><span>Menyukai</span></a>
                    </li>
                    <li class="breadcrumb-item">
                        <a class="text-dark active-2" href="#"><span>Komentar</span></a> 
                    </li>
                </ol>
            </nav>
            </div>
            <ul class="list-style-none">
                <li class="d-flex card-body border-bottom"> 
                    <i class="fa fa-user w-30px m-t-5"></i>
                    <div class="d-flex flex-column"> 
                        <a href="#" class="m-b-0 font-medium p-0">Artasya Legina</a>
                        <span class="text-date">1 Agustus</span> 
                        <span class="text-muted">mulai mengikuti anda.</span> 
                    </div>
                </li>
                <li class="d-flex card-body border-bottom"> 
                    <i class="fa fa-star w-30px m-t-5"></i>
                    <div class="d-flex flex-column"> 
                        <a href="#" class="m-b-0 font-medium p-0">Muhammad Gaza</a> 
                        <span class="text-date">22 Januari</span><span class="text-muted">menyukai cerita anda : hate (chapter 4).</span> 
                    </div>
                </li>
                <li class="d-flex card-body border-bottom"> 
                    <i class="fa fa-comment w-30px m-t-5"></i>
                    <div class="d-flex flex-column"> 
                        <a href="#" class="m-b-0 font-medium p-0">Muhammad Gaza</a> 
                        <span class="text-date">22 Januari</span>
                        <span class="text-muted">membuat komentar di cerita anda : Hate (chapter 4).</span>
                    </div>
                </li>
                <li class="d-flex card-body border-bottom"> 
                    <i class="fa fa-comment w-30px m-t-5"></i>
                    <div class="d-flex flex-column"> 
                        <a href="#" class="m-b-0 font-medium p-0">Amel</a> 
                        <span class="text-date">22 Juni</span>
                        <span class="text-muted">membuat komentar di cerita anda : Hate (chapter 1).</span> 
                    </div>
                </li>
                <li class="d-flex card-body border-bottom"> 
                    <i class="fa fa-user w-30px m-t-5"></i>
                    <div class="d-flex flex-column"> 
                        <a href="#" class="m-b-0 font-medium p-0">Amel</a> 
                        <span class="text-date">22 Juni</span>
                        <span class="text-muted">mulai mengikuti anda.</span> 
                    </div>
                </li>
            </ul>
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
    padding-bottom: 40px;
}

.card {
    max-width: 800px;
    background-color: #fff;
    border: 0px solid transparent;
    border-radius: 0px;
    padding: 30px 20px;
}

.card-body {
    padding: 0.8rem 2rem 0.8rem 0;
}

.card-body:first-child {
    padding: 0 2rem 0.8rem 0;
}

.card .card-title {
    position: relative;
    font-weight: 600;
    margin-bottom: 10px
}

ul.list-style-none li {
    list-style: none;
}

ul.list-style-none li a {
    color: #463fac;
    padding: 8px 0px;
    display: block;
    text-decoration: none;
}

.m-t-5 {
    margin-top: 5px
}

.w-30px {
    width: 30px
}

.text-date{
    font-size: 10px;
    color: #333;
}

.breadcrumb {
    padding: 15px 15px 0 15px;
    font-size: 16px;
    color: #aaa !important;
    letter-spacing: 2px;
    border-radius: 5px !important;
}

.active-1,
.active-2 {
    font-size: 10px !important;
    padding-bottom: 8px !important;
    padding-top: 8px !important;
    padding-right: 12px !important;
    padding-left: 12px !important;
    border-radius: 200px !important;
    background-color: #F3E5F5 !important;
}

@media (max-width: 490px) {
    .breadcrumb {
        font-size: 14px;
        letter-spacing: 0px !important;
        padding: 15px 0 0 0;
        display: flex;
        justify-content: center;
    }
    .breadcrumb-item{
        margin-top: 15px;
    }
    .active-1,
    .active-2 {
        padding-right: 10px !important;
        padding-left: 10px !important;
        width: 100% !important;
    }
    ul.list-style-none li a{
        font-size: 12px;
    }
    .text-muted{
        font-size: 12px;
    }
    i{
        font-size: 12px;
    }
    .card-body {
        padding: 0.5rem 0.6rem 0.5rem 0.6rem;
    }
    .card-body:first-child {
        padding: 0 0.6rem 0.5rem 0.6rem;
    }
}
</style>