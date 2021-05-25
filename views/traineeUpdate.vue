<template>

<div>


<InputsForParticipants v-if="holdOn" :tableTrainees="tableTrainees" :traineeInput="traineeInput" :id="$route.params.id" />

</div>

</template>

<script>
// import localStorageDriver from '../middleWare/local-storage/index2'
import InputsForParticipants from "@/components/InputsForParticipants";
import firebaseDatabase from "@/middleWare/firebase/database";

export default {
name: "traineeUpdate",
data(){
  return{
    traineeInput: {},
    tableTrainees:'tableTrainee',
    holdOn:false
  }
},
methods:{

  getTraineeById(){
    firebaseDatabase.getById({entity: this.tableTrainees, id: this.$route.params.id})
    .then(result =>{
      Object.assign(this.traineeInput , result)
      this.holdOn = true
    })
  }
},
components:{
  InputsForParticipants
},
created() {
  this.getTraineeById()
}
}
</script>

<style scoped>

</style>