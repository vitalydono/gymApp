<template>
  <div class="q-pa-md">
    <q-input outlined dense v-model="localEditedEmployee.firstName" label="first Name"/>
    <q-input outlined dense v-model="localEditedEmployee.lastName" label="Last Name"/>
    <q-input outlined dense v-model="localEditedEmployee.position" label="Position"/>
    <q-input outlined dense v-model="localEditedEmployee.startWorking" label="First Day"/>
    <q-input outlined dense v-model="localEditedEmployee.endWorking" label="Last Day"/>
    <q-input outlined dense v-model="localEditedEmployee.phoneNumber" label="Phone Number"/>
    <q-input type="text" outlined dense v-model="localEditedEmployee.email" label="Email"/>
    <q-file dense filled bottom-slots v-model="model" label="Label" counter max-files="12">
      <template v-slot:append>
        <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer"/>
        <q-icon name="create_new_folder" @click.stop/>
      </template>

      <template v-slot:after>
        <q-btn round dense flat icon="send"/>
      </template>
    </q-file>
    <q-btn dense v-if="!editedWorker.id" outline rounded color="primary" label="Submit Employee" @click="insert()"/>
    <q-btn dense v-if="editedWorker.id" outline rounded color="primary" label="update Employee" @click="update()"/>
  </div>
</template>
<script>

import firebaseInstance from "@/middleWare/firebase";
import firebaseDatabase from '../middleWare/firebase/database/index'
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: 'AddWorkers',
  props: ['tableName'],
  computed: mapState('workers', ['editedWorker', 'editedWorkerId']),
  data() {
    return {
      localEditedEmployee: {
        firstName: "",
        lastName: "",
        position: "",
        startWorking: "",
        endWorking: "",
        phoneNumber: "",
        email: "",
        image: ""
      },
      model: null
    }
  },
  methods: {
    ...mapActions('workers', ['updateWorker', 'insertWorker', 'getWorkers', 'setEditedWorkerById', 'hideInputs']),
    ...mapMutations('workers', ['setEditedWorker', 'setEditedWorkerId', 'resetEditedWorker', 'resetShowInputs']),
    localSetEditedWorker() {
      this.setEditedWorker(this.localEditedEmployee)
      this.localEditedEmployee = {};

    },
    goToHome() {

      this.$router.push('/');
    },
    insert() {
      firebaseInstance.firebase.storage().ref(`user/${window.user.uid}/images/${this.model.name}`).put(this.model)
          .then(storageRef => {
            storageRef.ref.getDownloadURL().then(url => {
              this.localEditedEmployee.image = url
            }).then(() => {
              this.setEditedWorker(this.localEditedEmployee)
              this.insertWorker();
              this.hideInputs();
            })
          })
    },
    update() {
      this.localSetEditedWorker();
      this.updateWorker();
      this.goToHome()

    }

  },
  created() {
    if (this.$route.params.id) {
      this.setEditedWorkerId(this.$route.params.id);
      this.setEditedWorkerById()
          .then(() => {
            Object.assign(this.localEditedEmployee, this.editedWorker)
          })
    }

  }
}
</script>

<style scoped>

</style>
