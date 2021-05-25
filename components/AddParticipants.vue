<template>
    <div class="main">


      <div class="add-search-btn">
        <q-btn outline rounded color="primary" label="Add Trainee" @click="switchAddTraineePage"/>
        <q-btn outline rounded color="primary" label="Search Trainee" @click="searchTrainee"/>
      </div>

      <div class="q-pa-md row items-start ">
        <q-card v-for="trainee of trainees" class="my-card">
          <img :src="trainee.image" height="200px">
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> first name: {{ trainee.fName }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> last name: {{ trainee.lName }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> address: {{ trainee.address }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> phone number: {{ trainee.pNumber }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> email: {{ trainee.email }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> first day: {{ trainee.fDay }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> last day: {{ trainee.lDay }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable >
            <q-item-section>
              <q-item-label @click="goToPerson(trainee.id)"> subscription duration: {{
                  trainee.subscriptionDuration
                }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-card-section>
            <q-btn @click="removeTrainee(trainee.id)">
              <q-icon name="delete" color="blue"/>
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>

</template>

<script>
import firebaseDatabase from '../middleWare/firebase/database/index'
import firebaseInstance from "@/middleWare/firebase";
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: "AddParticipants",
  props: ['tableTrainees'],
  data() {
    return {
      firstName: "",
      filterTrainee: [],

    }
  },

  computed: mapState('trainees', ['editedTraineeId', 'trainees']),
  methods: {
    ...mapActions('trainees', ['getTrainees', 'deleteTrainee']),
    ...mapMutations('trainees', ['setEditedTraineeId', 'resetEditedTraineeId']),
    switchAddTraineePage() {
      this.$router.push('/AddingParticipants')
    },
    removeTrainee(id) {
      this.setEditedTraineeId(id)
      this.deleteTrainee()

    },
    goToPerson(id) {
      this.$router.push((`/traineeUpdate/${id}`))
    },
    searchTrainee() {
      this.filterTrainee = this.trainees.filter(trainee => {
        return trainee.fName == this.firstName
      })
    },

  },
  created() {
    this.getTrainees()
  }

}
</script>

<style lang="scss" scoped>
.employeeCard {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 80px;
  width: 400px;

}

.my-card{

  margin-left:5vh;
  width:100%;
  max-width:300px;
}


</style>
