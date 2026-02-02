import React from "react";
import { useSelector } from "react-redux";

const ForecastDetails = () => {
  const { forecast, error } = useSelector((state) => state.weatherDetails);
  // console.log(forecast);
  if (error) return <p>{error}</p>;
  if (!forecast) return null;
  return (
  <div className="card bg-neutral text-neutral-content 
                w-full max-w-sm mx-auto">
  <div className="card-body items-center text-center px-4">
    <h2 className="card-title text-lg sm:text-xl">
      4 Days Forecast
    </h2>

    {forecast.map((item, index) => (
  <div
    key={index}
    className="flex items-center justify-between w-full text-sm"
  >
    <span>{new Date(item.dt_txt).toDateString()}</span>

    <img
      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
      alt="icon"
      className="w-8 h-8"
    />

    <span>{(item.main.temp - 273).toFixed(1)}°C</span>
  </div>
))}
  </div>
</div>

  ); 
};

export default ForecastDetails;
