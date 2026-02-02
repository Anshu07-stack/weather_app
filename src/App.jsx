import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/actions/weatherAction";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import ForecastDetails from "./ForecastDetails";

function App() {
  const city = useSelector((state) => state.weatherDetails.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);
  return (
   <>
  {/* Header */}
  <div className="sticky top-0 z-10 bg-base-100 w-full flex flex-col items-center gap-5 px-4 py-5">
    <h1 className="text-3xl max-sm:text-2xl">Weather Dashboard</h1>
    <Search />
  </div>

  {/* Content */}
  <div className="p-10 flex flex-col items-center gap-10 max-sm:p-4">
    <CurrentWeather />
    <ForecastDetails />
  </div>
</>

  );
}

export default App;
