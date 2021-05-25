<template>
  <div>
    <traineeCard :tableName="'workers'"/>

  </div>
</template>

<script>
// import api from '../middleWare/api/index';
import firebaseDatabase from '../middleWare/firebase/database/index'
import traineeCard from "@/components/traineeCard";



export default {
name: "Trainees",
  components:{
    traineeCard
  }


}

</script>

<style scoped>

</style>