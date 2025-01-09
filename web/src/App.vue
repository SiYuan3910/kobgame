<template>
  <NavBar></NavBar> 
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'

export default {
  components: {
    NavBar
  },
  setup() {
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: "wsy",
    //     password: "pwsy"
    //   },
    //   success(resp) {
    //     console.log(resp)
    //   },
    //   error(resp) {
    //     console.log(resp)
    //   }
    // }),
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwZDM3MWE1N2ViNTE0ODQ1YTljZTQwMGU5OWU2ZjRmNiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTczNDUwNjEwMCwiZXhwIjoxNzM1NzE1NzAwfQ.Z8CVsTYG5r7vIdU09ozaw3EuXn_3mXV1_MGsaQX40qQ"
    //   },
    //   success(resp) {
    //     console.log(resp)
    //   },
    //   error(resp) {
    //     console.log(resp)
    //   }
    // })
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: "d",
    //     password: "pd",
    //     confirmedPassword: "pd"
    //   },
    //   success(resp) {
    //     console.log(resp)
    //   },
    //   error(resp) {
    //     console.log(resp)
    //   }
    // })
  }
}

</script>

<style>
body {
  background-image: url("@/assets/image/background.png");
  background-size: cover;
}
</style>
