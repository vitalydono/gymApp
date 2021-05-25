<template>
  <div class="q-pa-md">
    <q-table
        grid
        card-class="bg-primary text-white"
        :data="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import localStorageDriver from '../middleWare/local-storage/index2'
export default {
name: "Trainee",
props:['tableName'],
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'First name',
          align: 'left',
          field: 'firstName',
          sortable: true
        },
        { name: 'lastName', align: 'left', label: 'last Name', field: 'lastName', sortable: true },
        { name: 'position', label: 'position',align: 'left', field: 'position', sortable: true },
        { name: 'startWorking',align: 'left', label: 'first day', field: 'startWorking' },
        { name: 'endWorking',align: 'left', label: 'last day', field: 'endWorking' },
        { name: 'phoneNumber',align: 'left', label: 'phone number', field: 'phoneNumber' },
        { name: 'email',align: 'left', label: 'email', field: 'email' }

      ],
      rows: []

    }
  }

}
</script>


<style scoped>


</style>

