import React from 'react'
import { useSelector } from 'react-redux'

const CurrentWeather = () => {

    const {current,loading,error} = useSelector(state=>state.weatherDetails)
    // console.log(current,loading)

    if(loading) return <p>Loading....</p>
    if(error) return <p>{error}</p>
      if (!current) return <p>No weather data</p>

  return (
    <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{current.name}</h2>
    <p>Temprature : {(current.main.temp-273).toFixed(1)} °C </p>
    <p>Humidity : {current.main.humidity}%</p>
    <p>Weather : {current.weather[0].description}</p>

     
  </div>
</div>
  )
}

export default CurrentWeather
