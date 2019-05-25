<template>
  <v-list two-line subheader>
    <v-list-tile 
      v-for="item in items"
      :key="item.id"
      @click=""
    >
      <v-list-tile-avatar color="secondary" class="hidden-sm-and-down">
         <v-icon>list</v-icon>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">cloud_download</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  private items: any = [];

  public mounted() {
    for (let index = 0; index < 10; index++) {
      this.items.push({
        id: index,
        subtitle: '25-5-2019 17:34:16',
        title: '10 Push-ups ( John Doe )',
      });
    }
  }
}
</script>