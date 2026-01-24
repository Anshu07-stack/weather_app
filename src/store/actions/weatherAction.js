import {
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  SET_CITY,
} from "../constants/weatherConstants";
import axios from "axios"
const api_key = import.meta.env.VITE_WEATHER_API

export const fetchWeatehrPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};

export const fetchWeatherSuccess = (data) => {
  return {
    type: FETCH_CURRENT_SUCCESS,
    payload: data,
  };
};

export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};
export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city)=>{
  return async (dispatch)=>{
     const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)

     console.log(response)
  }
}
