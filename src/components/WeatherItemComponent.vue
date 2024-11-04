<template>
  <div class="weather-item">
    <h2>Väder för {{ cityName }}</h2>
    <p>Senast uppdaterad: {{ lastUpdated }}</p>
    <div v-if="loading" class="loading-message">Hämtar väder...</div>
    <div v-else>
      <div v-for="(value, key) in filteredWeatherData" :key="key" class="weather-info">
        <p class="weather-label">{{ key }}</p>
        <p class="weather-value">{{ value }}</p>
      </div>
      <div v-if="isGoodWeather" class="good-weather-message">
        <p>Det är ett bra väder idag!</p>
      </div>
      <div v-else>
        <p>Vädret är inte så bra idag.</p>
      </div>
    </div>
    <button @click="updateWeather" class="update-button">Uppdatera väder</button>

    <div class="weather-options">
      <label v-for="(value, key) in translationMap" :key="key" class="option-label">
        <input type="checkbox" v-model="selectedOptions" :value="key" class="option-checkbox">
        <span class="option-text">{{ value }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherItemComponent',
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      weatherData: null,
      latestWeatherData: null,
      lastUpdated: null,
      translationMap: {
        temperature: 'Temperatur',
        precipitation: 'Nederbörd',
        rain: 'Regn',
        cloud_cover_low: 'Molntäckning (låga)',
        cloud_cover_mid: 'Molntäckning (mellanliggande)',
        cloud_cover_high: 'Molntäckning (hög)',
        visibility: 'Sikt',
        wind_speed_10m: 'Vindhastighet (10 m)',
        wind_speed_80m: 'Vindhastighet (80 m)',
        wind_speed_120m: 'Vindhastighet (120 m)',
        uv_index: 'UV-index',
        uv_index_clear_sky: 'UV-index (klar himmel)',
      },
      selectedOptions: [] 
    };
  },
  computed: {
    filteredWeatherData() {
      if (!this.latestWeatherData) return null;
      const filteredData = {};
      this.selectedOptions.forEach(option => {
        if (option in this.latestWeatherData) {
          filteredData[this.translationMap[option]] = this.latestWeatherData[option];
        }
      });
      return filteredData;
    },
    isGoodWeather() {
      if (!this.latestWeatherData) return false;
      const temperature = this.latestWeatherData.temperature;
      const precipitation = this.latestWeatherData.precipitation;

      
      return temperature > 20 && precipitation === 0;
    }
  },
  mounted() {
    this.getWeatherData();
  },
  methods: {
    async getWeatherData() {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,rain,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,uv_index,uv_index_clear_sky,is_day`);
        if (response.ok) {
          const weatherData = await response.json();
          this.weatherData = weatherData;
          this.latestWeatherData = this.getLatestWeatherData(weatherData.hourly);
          this.updateLastUpdated();
        } else {
          console.error('Fetch error:', response.statusText);
        }
        this.loading = false;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    getLatestWeatherData(hourlyData) {
      const latestTimeIndex = hourlyData.time.length - 1;
      return {
        temperature: hourlyData.temperature_2m[latestTimeIndex],
        precipitation: hourlyData.precipitation[latestTimeIndex],
        rain: hourlyData.rain[latestTimeIndex],
        cloud_cover_low: hourlyData.cloud_cover_low[latestTimeIndex],
        cloud_cover_mid: hourlyData.cloud_cover_mid[latestTimeIndex],
        cloud_cover_high: hourlyData.cloud_cover_high[latestTimeIndex],
        visibility: hourlyData.visibility[latestTimeIndex],
        wind_speed_10m: hourlyData.wind_speed_10m[latestTimeIndex],
        wind_speed_80m: hourlyData.wind_speed_80m[latestTimeIndex],
        wind_speed_120m: hourlyData.wind_speed_120m[latestTimeIndex],
        uv_index: hourlyData.uv_index[latestTimeIndex],
        uv_index_clear_sky: hourlyData.uv_index_clear_sky[latestTimeIndex]
      };
    },
    updateWeather() {
      this.loading = true;
      this.getWeatherData();
    },
    updateLastUpdated() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();

      this.lastUpdated = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-bg: #1e1e1e; 
$primary-color: white; 
$loading-color: rgb(254, 6, 6); 
$button-bg: #e74c3c; 
$button-hover-bg: #c0392b; 
$weather-info-color: #f9f9f9; 
.weather-item {
  text-align: center;
  background-color: $primary-bg;
  color: $primary-color;
  border-radius: 20px;
  padding: 2%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 400px; 
  margin: 0 auto; 
  position: relative; 
}

.loading-message {
  font-size: 1.2rem;
  margin-top: 20px;
  color: $loading-color;
  font-weight: bold; 
}

.weather-info {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  color: $weather-info-color;

  .weather-label {
    font-weight: bold;
    color: $weather-info-color;
    font-size: 1.1rem; 
  }

  .weather-value {
    font-size: 1.1rem; 
    color: lighten($weather-info-color, 30%); 
  }
}

.update-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: $button-bg;
  color: $primary-color;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $button-hover-bg; 
  }
}

.weather-options {
  margin-top: 20px;
  color: $weather-info-color;

  .option-label {
    margin-right: 10px;
    color: $weather-info-color;
  }

  .option-checkbox {
    margin-right: 5px;
  }

  .option-text {
    font-size: 0.9rem;
    color: $weather-info-color;
  }
}

.good-weather-message {
  color: green; 
  font-weight: bold;
  margin-top: 10px;
}
</style>
