<template>
  <div class="main-weather-component">
    <h1>Välkommen till Väderappen</h1>
    <p>Upptäck dagens väder och förväntad prognos!</p>
    <router-link to="/everything" class="weather-today-btn">Väder idag</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainWeatherComponent'
};
</script>

<style scoped>
.main-weather-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: #f9f9f9; 
}

.weather-today-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #4CAF50;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.weather-today-btn:hover {
  background-color: #45a049;
}
</style>
