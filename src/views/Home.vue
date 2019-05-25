<template>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn to="/user-profile" color="secondary" large>
        <v-icon left>add_circle</v-icon> 
        Start new measurement
      </v-btn>
    </v-card-actions>

    <h2>History</h2>
    <History></History>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import History from '@/components/History.vue'; // @ is an alias to /src

@Component({
  components: {
    History,
  },
})
export default class Home extends Vue {}
</script>
