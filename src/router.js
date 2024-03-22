import { createRouter, createWebHistory } from 'vue-router';
import MainWeatherComponent from './components/MainWeatherComponent.vue';
import WeatherItemComponent from './components/WeatherItemComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainWeatherComponent
  },
  {
    path: '/everything',
    name: 'Everything',
    component: WeatherItemComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
