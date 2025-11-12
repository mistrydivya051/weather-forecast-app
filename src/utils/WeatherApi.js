import axios from 'axios';

// OpenWeather API key stored in env variable
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

//fetch current weather data
export const fetchCurrentWeather = async (city, units = 'metric') => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,       // city name
        units,         // units - metric or imperial
        appid: API_KEY // API key
      }
    });
    return res.data; // Return the data from API
  } catch (err) {
    console.error("Error fetching current weather:", err);
    throw err.response?.data || { message: "Failed to fetch current weather" };
  }
};

// fetch 5-day weather forecast
export const fetchForecast = async (city, units = 'metric') => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: city,       // city name
        units,         // units - metric or imperial
        appid: API_KEY // API key
      }
    });
    return res.data; // Return the data from API
  } catch (err) {
    console.error("Error fetching forecast:", err);
    throw err.response?.data || { message: "Failed to fetch forecast" };
  }
};
