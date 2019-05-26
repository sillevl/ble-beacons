<template>
  <v-container>
    <h1>Capture</h1>
    <v-layout  row wrap>
      <v-progress-circular
        rotate="360"
        size="300"
        width="35"
        value="12"
        color="red"
      >
        <span style="font-size: 72px">12</span>
      </v-progress-circular>
    </v-layout>
    <v-btn to="/feedback" color="secondary">Next</v-btn>
  </v-container>
</template>
