import { createRouter, createWebHistory } from 'vue-router';
import MainWeatherComponent from './components/MainWeatherComponent.vue';
import WeatherTodayComponent from './components/WeatherTodayComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainWeatherComponent
  },
  {
    path: '/everything',
    name: 'Everything',
    component: WeatherTodayComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
