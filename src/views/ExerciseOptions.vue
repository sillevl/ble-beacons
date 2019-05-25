<template>
  <v-container>
    <h1>Exercise Options</h1>

    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="exercises"
        label="Exercise"
      ></v-select>
    </v-flex>
    <v-flex xs12 sm6>
      <v-text-field
        label="Reps"
        clearable
        type="number"
        suffix="times"
        value="10"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 sm6>
      <v-text-field
        label="Timecap"
        clearable
        type="number"
        suffix="seconds"
        value="30"
      ></v-text-field>
    </v-flex>
    <v-btn to="/devices" color="secondary">Next</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class ExerciseOptions extends Vue {
  private exercises: string[] = ['Push-Up', 'Pull-Up', 'Squat', 'Lunge'];
}
</script>