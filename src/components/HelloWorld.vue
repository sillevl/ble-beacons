<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    hello world !
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>


<style>

</style>
