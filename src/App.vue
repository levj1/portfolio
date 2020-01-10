<template>
  <div id="app">
    <v-app>
      <Navbar />

      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>

      <Footer />
    </v-app>
  </div>
</template>



<script>
import Navbar from '@/views/Navbar';
import Footer from "@/views/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    drawer: false,
    dataFromApp: "I am from the app"
  })
};
</script>
