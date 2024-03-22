<template>
  <div class="welcome-page">
    <h1>Välkommen till Väderappen</h1>
    <p>Upptäck dagens väder och förväntad prognos!</p>
    <router-link to="/everything" class="weather-today-btn">Väder idag</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
};
</script>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
}

.welcome-page h1 {
  font-size: 36px;
  color: #333;
}

.welcome-page p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
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

.weather-today-btn:active {
  background-color: #398439;
}
</style>
