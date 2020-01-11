<template>
  <v-container>
      <v-row no-gutters      
          v-for="p in projects" :key="p.title"
      >
          <v-col
          cols="12" sm="4">
            <v-card
            class="pa-2"
            outlined
            tile>
                {{p.title}}
            </v-card>
          </v-col>
          <v-col
          cols="12" sm="4">
            <v-card
            class="pa-2"
            outlined
            tile>
                {{p.description}}
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "projects",
  components: {},
  data() {
    return {
      drawer: null,
      projects: [
        { title: "Timer", description: "Create a timer that expire after a number of minutes",
          status: false },
        { title: "Streak", description: "See the treak you've going for each of you application",
          status: false },
      ]
    };
  }
};
</script>
