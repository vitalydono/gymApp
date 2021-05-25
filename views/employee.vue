<template>
  <div>
    <AddWorkers v-if="wait" :employee="employee" :tableName="tableName"/>
  </div>
</template>

<script>
import localStorageDriver from '../middleWare/local-storage/index2';
// import api from '../middleWare/api/index'
import firebaseDatabase from '../middleWare/firebase/database/index'

import AddWorkers from "@/components/AddWorkers";


export default {
  name: "Employee",
  components: {AddWorkers},

  data() {
    return {
      employee: {},
      tableName: 'workers',
      wait: false
    }
  },
  methods: {
    getEmployeeById() {
      firebaseDatabase.getById({entity: this.tableName, id: this.$route.params.id})
          .then(result => {
            Object.assign(this.employee, result)
            this.wait = true
          })

      // this.employee = localStorageDriver.getItemById(this.tableName,this.$route.params.id)
    }
  },
  created() {
    this.getEmployeeById();


  }


}
</script>

<style scoped>

</style>