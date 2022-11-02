<template>
  <Header />
  <Form @findWeather="findWeather" />
  <Weather v-if="Object.keys(this.city).length" @cleanCity="cleanCity" :city="city" />
</template>

<script>
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Weather from './components/Weather.vue';

import { getWeather } from './services/app';

export default {
  name: 'App',
  data() {
      return {
          city: {},
      };
  },
  methods: {
    async findWeather(name) {
      const result = await getWeather(name);

      if (result.status == 200) {
        const { data } = result;
        this.city = {
          name: data.name,
          description: data.weather[0].description,
          temp: Math.trunc(data.main.temp),
          feels_like: Math.trunc(data.main.feels_like),
          temp_min: Math.trunc(data.main.temp_min),
          temp_max: Math.trunc(data.main.temp_max),
          humidity: data.main.humidity,
          wind: Math.trunc(data.wind.speed)
        };
      }
    },
    cleanCity () {
      this.city = {};
      document.getElementById("city_name").focus();
      document.getElementById("city_name").value = '';
    }
  },
  components: {
    Header,
    Weather,
    Form
  }
}
</script>

<style>
</style>
