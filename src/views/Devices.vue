<template>
  <v-container>
    <h1>Connect Devices</h1>
    <v-layout  row wrap>
      <v-flex xs12 md6>
        <v-layout  row wrap>
          <v-flex xs6>
            <v-btn to="/capture" color="success" class="black--text"><v-icon left>done</v-icon>Arm left</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="success" class="black--text"><v-icon left>done</v-icon>Arm right</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Chest</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Wrist left</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Wrist right</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Foot left</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Foot right</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn to="/capture" color="error" class="black--text"><v-icon left>close</v-icon>Leg right</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-img src="https://media.istockphoto.com/vectors/male-female-and-childrens-silhouette-on-white-background-vector-vector-id957444010"></v-img>
      </v-flex>
    </v-layout>
    <v-btn to="/capture" color="secondary">Next</v-btn>
  </v-container>
</template>
