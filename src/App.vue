<template>
  <v-app dark>
    <v-toolbar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>6Wolves</span>
        <span class="font-weight-light">Motion Classification</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat >Home</v-btn>
        <v-btn to="/about" flat >About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
    height="auto"
  >
    <v-card class="white--text text-xs-center">
      <v-card-text class="white--text">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>6 Wolves</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>
