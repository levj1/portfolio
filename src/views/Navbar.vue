<template>
  <div id="navbar">
    <v-navigation-drawer
    class="blue lighten-4"
     disable-resize-watcher v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-down"></v-app-bar-nav-icon>
      <v-toolbar-title><v-btn router to="/">Application</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item class="hidden-sm-and-down" v-for="item in items" :key="item.title">
        <router-link :to="{ path: item.link }" >
          <v-btn text>{{item.title}}</v-btn>
        </router-link>
      </v-toolbar-item>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon class="hidden-md-and-up" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-card width="600" class="mx-auto">
          <v-list-item align="center"
          v-for="item in items" v-bind:key="item.title">
            <v-list-item-content>
              <v-list-item-title class="headline mb-1"><v-btn>{{item.title}}</v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "About", icon: "mdi-house", link: '/about'},
      { title: "Resume", icon: "mdi-image", link: '/resume' },
      { title: "Projects", icon: "mdi-help-box", link: '/projects' },
      { title: "Contact", icon: "mdi-help-box", link: '/contact' },
      { title: "Service", icon: "mdi-help-box", link: '/service' },
    ]
  }),
  methods: {}
};
</script>