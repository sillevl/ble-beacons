import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import UserProfile from './views/UserProfile.vue';
import ExerciseOptions from './views/ExerciseOptions.vue';
import Devices from './views/Devices.vue';
import Capture from './views/Capture.vue';
import Feedback from './views/Feedback.vue';
import History from './views/History.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile,
    },
    {
      path: '/exercise-options',
      name: 'exercise',
      component: ExerciseOptions,
    },
    {
      path: '/devices',
      name: 'devices',
      component: Devices,
    },
    {
      path: '/capture',
      name: 'capture',
      component: Capture,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
