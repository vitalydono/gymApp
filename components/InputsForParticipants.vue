<template>
  <div>
    <q-input outlined dense v-model="localEditTrainee.fName" label="first name"/>
    <q-input outlined dense v-model="localEditTrainee.lName" label="last name"/>
    <q-input outlined dense v-model="localEditTrainee.address" label="address"/>
    <q-input outlined dense v-model="localEditTrainee.pNumber" label="phone number"/>
    <q-input outlined dense v-model="localEditTrainee.email" type="email" label="email"/>
    <q-input outlined dense v-model="localEditTrainee.fDay" label="first day"/>
    <q-input outlined dense v-model="localEditTrainee.lDay" label="last day"/>
    <q-input outlined dense v-model="localEditTrainee.subscriptionDuration" type="number"
             label="subscription duration"/>
    <div class="select-picture">
      <q-file dense filled bottom-slots v-model="model" label="Label" counter max-files="12">
        <template v-slot:append>
          <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer"/>
          <q-icon name="create_new_folder" @click.stop/>
        </template>
      </q-file>
    </div>
    <q-btn dense v-if="!editedTrainee.id" outline rounded color="primary" label="Submit Trainee"
           @click="submitTrainee"/>
    <q-btn dense v-if="editedTrainee.id" outline rounded color="primary" label="Update Trainee" @click="update"/>
  </div>
</template>

<script>
// import localStorageDriver from '../middleWare/local-storage/index2'
import firebaseDatabase from '../middleWare/firebase/database/index'
import firebaseInstance from "@/middleWare/firebase";
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "inputsForParticipants",
  props: ['tableTrainees', 'traineeInput', 'id'],
  computed: mapState('trainees', ['editedTrainee', 'editedTraineeId']),
  data() {
    return {
      localEditTrainee: {
        fName: '',
        lName: '',
        address: '',
        pNumber: '',
        email: '',
        fDay: '',
        lDay: '',
        subscriptionDuration: '',
        image: ""
      },

      model: null,

    }
  },

  methods: {
    ...mapActions('trainees', ['insertTrainee', 'updateTrainee', 'getTrainees', 'setEditedTraineeById']),
    ...mapMutations('trainees', ['setEditedTrainee', 'setEditedTraineeId', 'resetEditedTrainee']),
    localSetEditedTrainee() {
      this.setEditedTrainee(this.localEditTrainee)
      this.localEditTrainee = {}
    },
    submitTrainee() {
      firebaseInstance.firebase.storage().ref(`user/${window.user.uid}/images/${this.model.name}`).put(this.model)
          .then(storageRef => {
            storageRef.ref.getDownloadURL().then(url => {
              this.localEditTrainee.image = url
            }).then(() => {
              this.setEditedTrainee(this.localEditTrainee)
              this.insertTrainee()
              this.$router.push('/Participants')
            })
          })
    },
    update() {
        this.localSetEditedTrainee();
        this.updateTrainee()
            .then(() => {
              this.$router.push('/Participants')
            })
      }
    },
    created() {
      // if (this.traineeInput) {
      //   Object.assign(this.editTrainee, this.traineeInput)
      // }
      if (this.$route.params.id) {
        this.setEditedTraineeId(this.$route.params.id);
        this.setEditedTraineeById()
            .then(() => {
              Object.assign(this.localEditTrainee, this.editedTrainee)
            })
      }


      // submitTrainee() {
      //   firebaseInstance.firebase.storage().ref(`user/${window.user.uid}/images/${this.model.name}`).put(this.model)
      //       .then(storageRef => {
      //         storageRef.ref.getDownloadURL().then(url => {
      //           this.editTrainee.image = url
      //         }).then(() => {
      //           firebaseDatabase.createTrainee({entity: this.tableTrainees, traineeInput: this.editTrainee})
      //               .then(() => {
      //                 this.$router.push('/Participants')
      //               })
      //         })
      //       })
      //
      //
      // },
      // updateTrainee() {
      //   firebaseDatabase.updateTraineeData({entity: this.tableTrainees, id: this.id, traineeInput: this.editTrainee})
      //       .then(() => {
      //         this.$router.push('/Participants')
      //       })
      // }
    }
  }


</script>

<style scoped>

</style>