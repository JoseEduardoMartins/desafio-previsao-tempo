import config from '../config/config';
import api from "./api";

export const getWeather = async (name) => {
  return await api
    .get(`/data/2.5/weather?q=${name}&units=metric&appid=${config.openweathermap_id}`)
    .then((response) => response)
    .catch((error) => error.response);
};