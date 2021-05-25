<template>
  <div class="loginMainPage">
    <LoginAndRegister/>
  </div>
</template>

<script>
// import firebaseInstance from '../middleWare/firebase/index'
import LoginAndRegister from "@/components/LoginAndRegister";

export default {
  name: "Login",
  components:{LoginAndRegister},
  methods: {

  },
  created() {
    if (window.user){
      this.$router.push('/home')
    }
  }
}

</script>

<style scoped>

</style>
