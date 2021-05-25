<template>
  <div class="q-pa-md">
    <q-input dense outlined v-model="first" @change="searchWorker" label="search"/>
    <q-btn  outline rounded color="primary" label="clear" @click="clearInput"/>


    <q-table
        dense
        title="Worker Table"
        :data="filterWorkers"
        :columns="columns"
        row-key="name"
        binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="firstName" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.firstName }}</q-td>
          <q-td key="lastName" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.lastName }}</q-td>
          <q-td key="position" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.position }}</q-td>
          <q-td key="startWorking" :props="props" @click="goToEmployee(props.row.id)">{{
              props.row.startWorking
            }}
          </q-td>
          <q-td key="endWorking" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.endWorking }}</q-td>
          <q-td key="phoneNumber" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.phoneNumber }}</q-td>
          <q-td key="email" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.email }}</q-td>
          <q-td key="actions" :props="props">
            <q-btn @click="remove(props.row.id)">
              <q-icon name="delete"/>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>


import {mapState, mapActions,mapMutations} from 'vuex'


export default {
  name: "CardViewer",
  props: ['tableName'],
  data() {
    return {
      columns: [
        {
          name: 'firstName',
          required: true,
          label: 'First Name',
          align: 'left',
          field: 'firstName',
          sortable: true
        },
        {name: 'lastName', align: 'left', label: 'last Name', field: 'lastName', sortable: true},
        {name: 'position', label: 'position', align: "left", field: 'position', sortable: true},
        {name: 'startWorking', label: 'first day', align: "left", field: 'startWorking'},
        {name: 'endWorking', label: 'last day', align: "left", field: 'endWorking'},
        {name: 'phoneNumber', label: 'phone number', align: "left", field: 'phoneNumber'},
        {
          name: 'email',
          label: 'email',
          field: 'email',
          align: "left",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {name: 'actions', label: 'actions', align: "left", field: 'actions'},
      ],
      first:'',
      filterWorker:[]

    }
  },

  computed: {
    ...mapState('workers', ['editedWorkerId', 'workers','filterWorkers']),
    ...mapState('trainees', ['editedTraineeId', 'trainees'])
  },
  methods: {
    ...mapActions('workers', ['deleteWorker', 'getWorkers','searchWorkerByAnyField','resetWorker']),
    ...mapMutations('workers' , ['setInputValue']),
    ...mapActions('trainees', ['getTrainees']),

    goToEmployee(id) {
      this.$router.push(`/employee/${id}`)
    },
    remove() {
      this.deleteWorker()
    },
    searchWorker(){
      this.setInputValue(this.first)
      this.searchWorkerByAnyField()

    },
    clearInput(){
      this.resetWorker()
      this.first = ''
    }
  },
  created() {
    this.getWorkers();
    this.getTrainees()

  }
}
</script>

<style scoped>

</style>