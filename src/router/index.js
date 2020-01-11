import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuetify from '../views/Lessons/Vuetify.vue'
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';
import Projects from '../views/Project.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: Vuetify
  },
  {
    path: '/resume', name: 'resume', component: Resume
  },
  {
    path: '/contact', name: 'contact', component: Contact
  },
  {
    path: '/projects', name: 'projects', component: Projects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
