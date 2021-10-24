<template>
  <div class="notification is-danger">
        <v-card class='my-4'>
      <v-card-subtitle v-for='(error, index) in message' :key="index">
        {{ error.msg }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message'],
};
</script>
