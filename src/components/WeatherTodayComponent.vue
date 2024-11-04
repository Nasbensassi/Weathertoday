<template>
    <div class="weather-today">
      <WeatherItemComponent cityName="Berlin" /> 
    </div>
  </template>
  
  <script>
  import WeatherItemComponent from './WeatherItemComponent.vue';
  
  export default {
    name: 'WeatherToday',
    components: {
      WeatherItemComponent
    }
  };
  </script>
  
  <style scoped>
  .weather-today {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  </style>
  