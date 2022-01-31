import LiveFeed from "./Comps/LiveFeed";
import WeatherInfo from "./Comps/WeatherInfo";
import "./App.css";
import LocalNews from "./Comps/LocalNews";

import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Comps/Searchbar";

function WeatherApp() {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("London");
  const [iconURL, setIcon] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [{ sunrise, sunset }, setRise] = useState({ sunrise: "", sunset: "" });
  const [humidity, setHumidity] = useState("");
  const [uvIndex, setUV] = useState("");
  const [windspeed, setWindspeed] = useState("");

  useEffect(() => {
    getWeather();
  }, [location]);

  const setCityName = (cityName) => {
    setLocation(cityName);
    getWeather();
  };

  async function getWeather() {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OW_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        setTemp(data.main.temp);
        setWeather(data.weather[0].description);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        setFeelsLike(data.main.feels_like);
        setMin(data.main.temp_min);
        setMax(data.main.temp_max);
        setHumidity(data.main.humidity);
        setWindspeed(data.wind.speed);
        setRise({ sunrise: data.sys.sunrise, sunset: data.sys.sunset });
      });
  }

  return (
    <div className="App">
      <Searchbar setCityName={setCityName} />
      <WeatherInfo
        temp={{
          loc: location,
          temp,
          weather: weather,
          iconURL,
          feelsLike,
          max,
          min,
          windspeed,
          humidity,
          sunrise,
          sunset,
        }}
      />
      <LiveFeed location={location} />

      <LocalNews />
    </div>
  );
}

export default WeatherApp;
