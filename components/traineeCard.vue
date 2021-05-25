<template>
  <div class="worker-cards q-pa-md">
      <q-card v-for="worker of workers" class="my-card">
        <img :src="worker.image" height="200px" >
        <q-item clickable>
          <q-item-section>
            <q-item-label> first name: {{ worker.firstName }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label> last name: {{ worker.lastName }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label> position: {{ worker.position }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label> start working: {{ worker.startWorking }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label> end working: {{ worker.endWorking }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label> phone number: {{ worker.phoneNumber }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label> email: {{ worker.email }}</q-item-label>
          </q-item-section>
        </q-item>
        <!--      <q-card-section>-->
        <!--        <q-btn @click="removeTrainee(trainee.id)">-->
        <!--          <q-icon name="delete" color="blue"/>-->
        <!--        </q-btn>-->
        <!--      </q-card-section>-->
      </q-card>
  </div>
</template>

<script>

import firebaseDatabase from '../middleWare/firebase/database/index'
import listOfTrainee from "@/components/listOfTrainee";


export default {
  name: "Trainees",
  props: ['tableName'],
  components: {listOfTrainee},

  data() {
    return {
      workers: [],

    }
  },
  methods: {
    read() {
      firebaseDatabase.getUserData({entity: this.tableName})
          .then(result => {
            this.workers = result
          })
      // this.workers = localStorageDriver.select(this.tableName)
    }
  },
  created() {
    this.read()
  }
}

</script>

<style lang="sass">
.worker-cards
  display: grid
  grid-template-columns: repeat(6, 1fr)
  grid-gap: 80px
  width: 400px

.q-item
  width: 35vh
</style>
