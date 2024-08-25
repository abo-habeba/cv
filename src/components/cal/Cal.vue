<script setup>
  import TableView from './TableView.vue'
  import { ref } from 'vue'
  const days = [
    { id: 6, name: 'السبت', e_name: 'saturday' },
    { id: 0, name: 'الاحد', e_name: 'sunday' },
    { id: 1, name: 'الاثنين', e_name: 'monday' },
    { id: 2, name: 'الثلاثاء', e_name: 'tuseday' },
    { id: 3, name: 'الاربعاء', e_name: 'wednisday' },
    { id: 4, name: 'الخميس', e_name: 'thurthday' },
  ]
  const sessions = ref([
    { id: 1, day: 6, time: '08:00', duration: 2 },
    { id: 2, day: 6, time: '08:00', duration: 4 },
    { id: 3, day: 6, time: '10:00', duration: 2 },
  ])
  function addSession() {
    sessions.value.push({})
  }
</script>
<template>
  <v-btn class="ma-4" @click="addSession()" color="primary">Add Session</v-btn>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">day</th>
        <th class="text-left">time</th>
        <th class="text-left">duration</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in sessions" :key="item.name">
        <td>
          <v-select
            :items="days"
            item-title="name"
            item-value="id"
            v-model="item.day"
          ></v-select>
        </td>
        <td>
          <v-text-field type="time" v-model="item.time"></v-text-field>
        </td>
        <td>
          <v-text-field type="number" v-model="item.duration"></v-text-field>
        </td>
      </tr>
    </tbody>
  </v-table>
  <TableView :sessions="sessions"></TableView>
</template>
