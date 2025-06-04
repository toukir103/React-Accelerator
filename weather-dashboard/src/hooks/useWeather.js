import { useState } from "react";
const useWeather = () => {
  const [weatheData, setWeatherData] = useState({
    location: "",
    climate: "",
    temparature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching weather Data",
      });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY} &units=metric`);
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatheData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temparature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      }
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
};
