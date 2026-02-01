import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/actions/weatherAction";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import ForecastDetails from "./ForecastDetails";

function App() {
  
    const city = useSelector(state=>state.weatherDetails.city)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);
  return (
    <>
      <div className="p-10 flex flex-col items-center">
        <Search/>
        <CurrentWeather/>
        <ForecastDetails/>
      </div>
    </>
  );
}

export default App;
