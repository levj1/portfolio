<template>
  <div class="home" style="margin-top: 80px;">
    <h1>This is an HOME page</h1>

    <div class="d-block-flex pa-2">
      <div>
        <router-link to="/vuetify">Flex and Page size</router-link>
      </div>
      <div>
        <router-link to="/float">Learn about Float, Spacing</router-link>
      </div>
      <div>
        <router-link to="/home">Navigation</router-link>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      drawer: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>
