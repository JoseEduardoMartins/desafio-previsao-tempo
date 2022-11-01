<template>
  <Header />
  <Form @findWeather="findWeather" />
  <Capitals />
</template>

<script>
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Capitals from './components/Capitals.vue';

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
          description: data.weather.main,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          humidity: data.main.humidity,
          wind: data.wind.speed
        };
      }
    }
  },
  components: {
    Header,
    Form,
    Capitals
  }
}
</script>

<style>
</style>
