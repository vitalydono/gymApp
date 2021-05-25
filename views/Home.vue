<template>
  <div class="home">
    <q-btn outline rounded color="primary" label="Add Employee" @click="showInputs()"/>
    <AddWorkers v-if="show" :tableName="'workers'" @employeeAdded="reloadtable"/>
    <CardViewer :tableName="'workers'" :isReload="isReload"/>
    <traineeTable :tableTrainees="'tableTrainee'"/>
  </div>
</template>


<script>
import {mapMutations,mapActions,mapState} from "vuex";

// @ is an alias to /src

import CardViewer from "@/components/CardViewer";
import AddWorkers from "@/components/AddWorkers";
import traineeTable from "@/components/traineeTable";
// import traineeCard from "@/components/traineeCard";


export default {
  name: 'Home',
  computed:{ ...mapState('workers', ['show'])},
  components: {
    CardViewer, AddWorkers,traineeTable
  },
  data() {
    return {
      isReload: false,
    }
  },
  methods: {
    ...mapMutations('workers',['resetShowInputs']),
    ...mapActions('workers',['hideInputs']),

    reloadtable() {
      this.isReload = !this.isReload;
    },
    showInputs(){
      this.hideInputs()
    }
  },

}
</script>
<style lang="scss">

</style>
