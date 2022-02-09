<template>
  <div class="container">
    <div class="row">
      <sidebar :selected="4"></sidebar>
      <div class="col-md-9 my-lg-0 my-1">
        <div id="main-content" class="bg-white border">
          <div class="mx-auto">
            <div class="forgot">
              <h2>Forgot your password?</h2>
              <p>
                Change your password in three easy steps. This will help you to
                secure your password!
              </p>
              <ol class="list-unstyled">
                <li>
                  <span class="text-purple mr-2 text-medium">1. </span>Enter
                  your email address below.
                </li>
                <li>
                  <span class="text-purple mr-2 text-medium">2. </span>Our
                  system will send you a temporary link
                </li>
                <li>
                  <span class="text-purple mr-2 text-medium">3. </span>Use the
                  link to reset your password
                </li>
              </ol>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <div class="form-group">
                  <label for="email-for-pass">Enter your email address</label>
                  <input
                    class="form-control"
                    type="text"
                    id="email-for-pass"
                    required=""
                  /><small class="form-text text-muted"
                    >Enter the email address you used during the registration on
                    RBook. Then we'll email a link to this address.</small
                  >
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-purple text-white">
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userSidebar from "../../components/SidebarUser.vue";
export default {
  name: "UserResetPassword",
  components: {
    sidebar: userSidebar,
  },
};
</script>

<style scoped>
.container {
  padding-top: 80px;
  padding-bottom: 40px;
}

#main-content {
  padding: 30px;
  border-radius: 15px;
}

.forgot {
    background-color: #fff;
    padding: 20px 20px 0 20px;
    border: 1px solid #dfdfdf;
}

.card-footer {
    background-color: #fff
}

.btn {
    font-size: 13px
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #76b7e9;
    outline: 0;
    box-shadow: 0 0 0 0px #28a745
}
</style>