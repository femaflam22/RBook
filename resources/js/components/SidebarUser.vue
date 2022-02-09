<template>
  <div class="col-md-3 my-lg-0 my-md-1 mb-2">
    <div id="sidebar" class="bg-purple border">
      <div class="h4 text-white text-left">Kelola Akun</div>
      <ul>
        <li :class="{active:selected == 1}">
          <router-link v-bind:to="{ name: 'user.index' }">
            <a href="#" class="text-decoration-none d-flex align-items-center">
              <div class="fas fa-user mr-3"></div>
              <div class="d-flex flex-column">
                <div class="link">Akun Saya</div>
                <div class="link-desc">lihat profil saya</div>
              </div>
            </a>
          </router-link>
        </li>
        <li :class="{active:selected == 2}">
          <router-link v-bind:to="{ name: 'user.edit' }">
            <a href="#" class="text-decoration-none d-flex align-items-center">
              <div class="fas fa-cog mr-3"></div>
              <div class="d-flex flex-column">
                <div class="link">Edit Profil</div>
                <div class="link-desc">edit data akun anda</div>
              </div>
            </a>
          </router-link>
        </li>
        <li :class="{active:selected == 3}">
          <router-link v-bind:to="{ name: 'write_book.index' }">
            <a href="#" class="text-decoration-none d-flex align-items-center">
              <div class="fas fa-align-right mr-3"></div>
              <div class="d-flex flex-column">
                <div class="link">Daftar Tulisan</div>
                <div class="link-desc">lihat & kelola karya anda</div>
              </div>
            </a>
          </router-link>
        </li>
        <li :class="{active:selected == 4}">
          <router-link v-bind:to="{ name: 'user.reset_password' }">
            <a href="#" class="text-decoration-none d-flex align-items-center">
              <div class="fas fa-lock mr-3"></div>
              <div class="d-flex flex-column">
                <div class="link">Reset Password</div>
                <div class="link-desc">ubah kata sandi anda</div>
              </div>
            </a>
          </router-link>
        </li>
        <li :class="{active:selected == 5}">
            <a href="#" class="text-decoration-none d-flex align-items-center" @click="logoutUser">
              <div class="fas fa-power-off mr-3"></div>
              <div class="d-flex flex-column">
                <div class="link">Logout</div>
                <div class="link-desc">keluar dari akun anda</div>
              </div>
            </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
export default {
    name: 'SidebarUser',
    props: {
        selected : {
            type: Number,
            default: 5,
            required: true
        }
    },
    methods: {
        ...mapActions('auth', ['logout']),

        logoutUser() {
            this.logout().then(() => { });
        }
    }
};
</script>

<style scoped>
#sidebar {
    padding: 15px 0px 15px 0px;
    border-radius: 10px;
    background-color: #463fac;
}

#sidebar .h4 {
    font-weight: 500;
    padding-left: 15px
}

#sidebar ul {
    list-style: none;
    margin: 0;
    padding-left: 0rem
}

#sidebar ul li {
    padding: 10px 0;
    display: block;
    padding-left: 1rem;
    padding-right: 1rem;
    border-left: 5px solid transparent;
    background-color: #463fac;
}

#sidebar ul li.active {
    border-left: 5px solid #d96a26;
    background-color: #44007c;
}

#sidebar ul li a {
    display: block
}

#sidebar ul li a .fas,
#sidebar ul li a .far {
    color: #ddd
}

#sidebar ul li a .link {
    color: #fff;
    font-weight: 500
}

#sidebar ul li a .link-desc {
    font-size: 0.8rem;
    color: #ddd
}
</style>