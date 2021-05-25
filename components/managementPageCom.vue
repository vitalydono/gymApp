<template>
  <div class="backGroundPic">
    <div class="header">
      <h3>Welcome<br> To Gym Management System </h3>
    </div>
    <div class="managementOptions  ">
      <div class="q-pr-xl">
        <q-btn class="q-pa-lg"
               size="16px"
               color="orange"
               round
               label="Worker Management"
               @click="switchToWorker"


        />
      </div>
      <div>
        <q-btn class="q-pa-lg"
               size="16px"
               color="orange"
               round
               label="Trainee Management"
               @click="switchToTrainees"
        />
      </div>
      <div class="q-pl-xl">
        <q-btn class="q-pa-lg"
               size="16px"
               color="orange"
               round
               label="Inventory Management"
        />
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "managementPageCom",
  methods:{
    switchToWorker(){
      this.$router.push('/Trainees')
    },
    switchToTrainees(){
      this.$router.push('/participants')

    }
  }
}
</script>

<style lang="scss" scoped>
.backGroundPic {
  padding: 34em;
  background-image: url("../assets/qym.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.header {
  color: #027BE3;
  position: absolute;
  top: -3rem;
  right: 25rem;
}

.managementOptions {
  display: flex;
  position: absolute;
  left: 21%;

}


</style>