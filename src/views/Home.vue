<template>
  <v-container>
    <h1>Hello world</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <v-btn to="/user-profile" color="secondary">Next</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
