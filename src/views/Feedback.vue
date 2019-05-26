<template>
  <v-container>
    <h1>Feedback</h1>
    <!-- <v-form v-model="valid"> -->
    <v-form>
      <v-flex xs12 sm6>
        <v-slider
            :max="10"
            step="1"
            tick-size="1"
            thumb-label="always"
            label="Correctness"
          ></v-slider>
      </v-flex>
      <v-flex xs12 sm6>
        <v-slider
            :max="10"
            step="1"
            tick-size="1"
            thumb-label="always"
            label="Fatigue"
          ></v-slider>
      </v-flex>
      <v-flex xs12 sm6>
        <v-slider
            :max="10"
            step="1"
            tick-size="1"
            thumb-label="always"
            label="Tempo"
          ></v-slider>
      </v-flex>
      <v-flex xs12 sm6>
        <v-slider
            :max="10"
            step="1"
            tick-size="1"
            thumb-label="always"
            label="Shape"
          ></v-slider>
      </v-flex>
      <v-flex xs12 sm6>
        <v-slider
            :max="10"
            step="1"
            tick-size="1"
            thumb-label="always"
            label="Missed reps"
          ></v-slider>
      </v-flex>
    </v-form>
    <v-btn to="/history" color="secondary">Next</v-btn>
  </v-container>
</template>
