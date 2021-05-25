<template>
<div class="login">
  <q-card
      class="my-card text-white"


  >
    <q-card-section>
      <LoginAndRegister/>
    </q-card-section>

  </q-card>
</div>
</template>

<script>
import LoginAndRegister from "@/components/LoginAndRegister";
export default {
name: "incomingPage",
  components: {LoginAndRegister}
}
</script>

<style scoped>


</style>
