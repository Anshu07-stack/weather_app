import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/actions/weatherAction";
import Search from "./Search";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("noida"));
  }, []);
  return (
    <>
      <Search/>
    </>
  );
}

export default App;
