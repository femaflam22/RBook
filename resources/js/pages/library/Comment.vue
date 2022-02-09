<template>
<div class="wraper mt-5">
    <div class="d-flex justify-content-between card-back">  
            <router-link v-bind:to="{name: 'library.detail', params: {id: 2, part: 2}}">
            <i class="fas fa-arrow-left text-muted ml-1 mb-3"></i>
            </router-link>
            <div></div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="card">
            <div class="p-3 comment-wrap">
                <div class="d-flex flex-row align-items-center"> 
                    <span class="mr-1 fs-14">Sort By</span> 
                    <select class="carets">
                        <option selected hidden><i class="fa fa-caret-down"></i></option>
                        <option value="desc">terbaru</option>
                        <option value="asc">terlama</option>
                        <option value="reply">reply terbanyak</option>
                    </select> 
                </div>
                <div class="mt-5 d-flex flex-row px-2"> 
                    <img src="http://127.0.0.1:8000/assets/img/fantasy.png" width="40" height="40" class="profil">
                    <div class="w-100 ml-2 comment-area"> 
                        <textarea class="form-control"></textarea>
                        <div class="reply">
                            <p>Reply <span class="text-orange">@flmpt</span></p>
                        </div> 
                        <button class="btn btn-secondary btn-block mt-2 post-btn">Kirim Komentar</button>
                    </div>
                </div>
                <div class="comments mt-4">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center mb-5">Komentar</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="media"> 
                                    <img class="mr-3 rounded-circle" alt="" src="http://127.0.0.1:8000/assets/img/flexibility.png" />
                                    <div class="media-body">
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex flex-column">
                                                <h5>Maria Smantha</h5> <span>2 jam yang lalu</span>
                                            </div>
                                            <div>
                                                <div class="pull-right reply-icon"> 
                                                    <a href="#"><i class="fa fa-reply"></i> reply</a> 
                                                </div>
                                            </div>
                                        </div> 
                                        <p>waw, baru part-part awal aja udah segereget ini! kakak semangat yaaa! aku seneng banget baca ceritanya, bener-bener bikin mood banget kak! apa lagi karakter gaza nya, W O W. </p>
                                        <div class="media mt-4"> 
                                            <a class="pr-3" href="#">
                                                <img class="rounded-circle" alt="" src="http://127.0.0.1:8000/assets/img/romance.png" />
                                            </a>
                                            <div class="media-body">
                                                    <div class="d-flex flex-column">
                                                        <h5>Simona Disa</h5> <span>1 jam yang lalu</span>
                                                    </div>
                                                <p>setuju banget! saya lagi ngalamin bad day banget hari ini, tapi berkat baca cerita kakak, hari saya jadi good lagi ahahaha</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="media mt-4"> 
                                    <img class="mr-3 rounded-circle" alt="Bootstrap Media Preview" src="http://127.0.0.1:8000/assets/img/kingdom.png" />
                                    <div class="media-body">
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex flex-column">
                                                <h5>Shad f</h5> <span>1 hari yang lalu</span>
                                            </div>
                                            <div>
                                                <div class="pull-right reply-icon"> 
                                                    <a href="#">
                                                        <i class="fa fa-reply"></i> reply
                                                    </a> 
                                                </div>
                                            </div>
                                        </div> 
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias aperiam eligendi dolor ex architecto blanditiis amet ipsa doloribus alias. </p>
                                        <div class="media mt-4"> 
                                            <a class="pr-3" href="#">
                                                <img class="rounded-circle" alt="" src="http://127.0.0.1:8000/assets/img/joke.png" />
                                            </a>
                                            <div class="media-body">
                                                    <div class="d-flex flex-column">
                                                        <h5>Andy flowe</h5> <span>1 hari yang lalu</span>
                                                    </div>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                            </div>
                                        </div>
                                        <div class="media mt-3"> 
                                            <a class="pr-3" href="#">
                                                <img class="rounded-circle" alt="" src="http://127.0.0.1:8000/assets/img/horror.png" />
                                            </a>
                                            <div class="media-body">
                                                    <div class="d-flex flex-column">
                                                        <h5>Simp f</h5> <span>5 jam yang lalu</span>
                                                    </div>
                                                <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
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
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wraper{
    padding: 60px 0;
}

.card-back{
    max-width: 1000px;
    margin: auto;
}

.card-back i {
    font-size: 20px;
}

.card{
    max-width: 1000px;
    margin: auto;
    display: flex;
    height: auto;
}

.comment-wrap{
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    background: #fff;
    border-radius: 5px;
}

.carets {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: #9b9b9b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    margin-top: 2px;
}

.fs-14 {
    font-size: 14px;
}

.form-control {
    width: 100%;
    height: 140px;
    resize: none;
    border: 2px solid #eee;
}

.form-control:focus {
    box-shadow: none;
}

.comment-area {
    position: relative;
}

.profil{
    border-radius: 50%;
}

.reply {
    position: absolute;
    list-style: none;
    padding: 10px;
    border: 2px solid #eee;
    border-radius: 36px;
    display: flex;
    top: -25px;
    right: 27px;
    background-color: #fff;
    align-items: center;
}

.post-btn {
    height: 50px;
    font-size: 16px;
    background: #f0da99;
    border: none;
}

.comments {
    display: flex;
    padding: 20px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
}

.media img {
    width: 40px;
    height: 40px;
}

.media p {
    font-size: 14px;
}

.media span{
    font-size: 12px;
    color: #ebc633;
}

.reply-icon a {
    text-decoration: none;
    color: #ebc633;
}

@media (max-width: 1050px){
    .card, .card-back{
        max-width: 800px;
    }
}

@media (max-width: 850px){
    .card, .card-back{
        max-width: 600px;
    }

    .media img {
        width: 30px;
        height: 30px;
    }

    .media p {
        font-size: 12px;
    }

    .media h5{
        font-size: 16px;
    }
}

@media (max-width: 645px){
    .comment-wrap{
        box-shadow: none;
        border-radius: 0;
    }
    .card, .card-back{
        margin: 0 15px;
    }
    .comments h3{
        font-size: 18px;
    }
    .post-btn{
        height: 30px;
        font-size: 14px;
    }
    .reply{
        padding: 3px 5px 0 5px;
        font-size: 12px;
    }
}

@media (max-width: 400px){
    .media img {
        width: 20px;
        height: 20px;
    }

    .media p {
        font-size: 11px;
    }

    .media h5{
        font-size: 14px;
    }
}
</style>