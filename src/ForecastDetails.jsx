import React from "react";
import { useSelector } from "react-redux";

const ForecastDetails = () => {
  const { forecast,error } = useSelector((state) => state.weatherDetails);
  console.log(forecast, loading);
  if(error) return <p>{error}</p>
  if(!forecast) return null
  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">4 Days Forecast</h2>
        {forecast.map((item,index) => {
            console.log(item.main.temp)
          return <p key={index}> {item.dt_txt} - {(item.main.temp -273).toFixed(1)}
          °C </p>;
        })}
      </div>
    </div>
  );
};

export default ForecastDetails;
