<template>
  <div class="contact">
    <h1>Contact Us</h1>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "contactus",
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
