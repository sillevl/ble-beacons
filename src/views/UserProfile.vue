<template>
  <v-container>
    <h1>User Profile</h1>
    <!-- <v-form v-model="valid"> -->
    <v-form>
      <v-flex xs12 sm6>
        <v-text-field
          label="Name"
          clearable
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field
          label="Age"
          clearable
          type="number"
          suffix="year"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field
          label="Weight"
          clearable
          type="number"
          suffix="kg"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field
          label="Height"
          clearable
          type="number"
          suffix="cm"
        ></v-text-field>
      </v-flex>
      <v-radio-group>
        <v-radio label="Male" value="m"></v-radio>
        <v-radio label="Female" value="f"></v-radio>
      </v-radio-group>
      <v-flex xs12 sm6>
        <v-slider
            :tick-labels="fitnessLabels"
            :max="3"
            step="1"
            ticks="always"
            tick-size="1"
            label="fitness"
          ></v-slider>
      </v-flex>
    </v-form>
    <v-btn to="/exercise-options" color="secondary">Next</v-btn>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class UserProfile extends Vue {
  private fitnessLabels: string[] = ['Never', 'monthly', 'weekly', 'dayly'];
}
</script>