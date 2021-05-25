<template>
<div>
<InputsForParticipants :tableTrainees="'tableTrainee'"/>

</div>
</template>

<script>
import InputsForParticipants from "@/components/InputsForParticipants";

export default {
name: "AddParticipantPage",
components:{
  InputsForParticipants,

}

}
</script>

<style scoped>

</style>