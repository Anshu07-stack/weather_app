import React from 'react'
import { useSelector } from 'react-redux'

const CurrentWeather = () => {

    const {current,loading,error} = useSelector(state=>state.weatherDetails)
    // console.log(current,loading)

    if(loading) return <p>Loading....</p>
    if(error) return <p>{error}</p>
      if (!current) return <p>No weather data</p>

  return (
<div className="card bg-neutral text-neutral-content w-full max-w-sm mx-auto">
  <div className="card-body items-center text-center">

    <h2 className="card-title text-xl">{current.name}</h2>

    <img
      src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
      alt="weather icon"
      className="w-20 h-20"
    />

    <p className="text-lg">
      {(current.main.temp - 273).toFixed(1)} °C
    </p>

    <p>Humidity: {current.main.humidity}%</p>
    <p className="capitalize">
      {current.weather[0].description}
    </p>
  </div>
</div>

  )
}

export default CurrentWeather
