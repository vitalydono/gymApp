<template>
  <div>
    <div class="q-pa-md">

      <q-table
          title="Trainee Table"
          :data="rows"
          :columns="columns"
          row-key="name"
          binary-state-sort
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="fName" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.fName }}</q-td>
            <q-td key="lName" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.lName }}</q-td>
            <q-td key="address" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.address }}</q-td>
            <q-td key="fDay" :props="props" @click="goToEmployee(props.row.id)">{{
                props.row.fDay
              }}
            </q-td>
            <q-td key="lDay" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.lDay }}</q-td>
            <q-td key="pNumber" :props="props" @click="goToEmployee(props.row.id)">{{
                props.row.pNumber
              }}
            </q-td>
            <q-td key="email" :props="props" @click="goToEmployee(props.row.id)">{{ props.row.email }}</q-td>
            <q-td key="subscriptionDuration" :props="props" @click="goToEmployee(props.row.id)">
              {{ props.row.subscriptionDuration }}
            </q-td>
            <q-td key="actions" :props="props">
              <q-btn @click="remove(props.row.id)">
                <q-icon name="delete"/>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>

import firebaseDatabase from '../middleWare/firebase/database/index'

export default {
  name: "traineeTable",
  props: ['tableTrainees'],
  data() {
    return {
      columns: [
        {
          name: 'fName',
          required: true,
          label: 'First Name',
          align: 'left',
          field: 'fName',
          sortable: true
        },
        {name: 'lName', align: 'left', label: 'last Name', field: 'lName', sortable: true},
        {name: 'address', label: 'address', align: "left", field: 'address', sortable: true},
        {name: 'fDay', label: 'first day', align: "left", field: 'fDay'},
        {name: 'lDay', label: 'last day', align: "left", field: 'lDay'},
        {name: 'pNumber', label: 'phone number', align: "left", field: 'pNumber'},

        // {name: 'image', label: 'image', align: "left", field: 'image'},
        {
          name: 'email',
          label: 'email',
          field: 'email',
          align: "left",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {name: 'subscriptionDuration', label: 'subscriptionDuration', align: "left", field: 'subscriptionDuration'},
        {name: 'actions', label: 'actions', align: "left", field: 'actions'},
      ],
      rows: [],
      phone: "",
      filterRows: []
    }
  },
  methods: {
    readTableTrainee() {
      firebaseDatabase.getUserData({entity: this.tableTrainees})
          .then(result => {
            this.rows = result
          })
    },
    remove(id) {
      firebaseDatabase.removeData({entity: this.tableTrainees, id})
          .then(() => {
            this.readTableTrainee()
          })
    }
  },

  created() {
    this.readTableTrainee()
    firebaseDatabase.getRef({entity: this.tableTrainees})
        .on('child_changed', (snapshot) => {
          this.readTableTrainee()

        });
  }

}
</script>

<style scoped>

</style>