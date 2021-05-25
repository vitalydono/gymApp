<template>
<div>
<AddParticipants :tableTrainees="'tableTrainee'" />
</div>
</template>

<script>
import AddParticipants from "@/components/AddParticipants";


export default {

  name: "participants",
  components:{
    AddParticipants
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>