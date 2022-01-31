import humidIcon from "./icons/humidity.png";
import sunriseIcon from "./icons/sunrise.png";
import sunsetIcon from "./icons/sunset.png";
import windspeedIcon from "./icons/windspeed.png";
import uvIndexIcon from "./icons/uvIndex.png";
import Moment from "react-moment";
const WeatherInfo = (props) => {
  return (
    <div className="weather-info-container">
      <div className="weather-info-grid">
        <div className="weather-info-head">
          <div className="weather-info-location">{props.temp.loc}</div>

          <div className="weather-info-weather">{props.temp.weather}</div>
          <div className="icon-container">
            <img src={props.temp.iconURL} alt="icon"></img>
            <div className="weather-info-temperature">{props.temp.temp}°</div>
          </div>
          <span>
            <img
              className="weather-info-icons"
              src={sunriseIcon}
              alt="sunrise"
            ></img>
            <Moment unix>{props.temp.sunrise}</Moment>
          </span>
          <span>
            <img
              className="weather-info-icons"
              src={sunsetIcon}
              alt="sunset"
            ></img>
            <Moment unix>{props.temp.sunset}</Moment>
          </span>
        </div>

        <div className="other-info">
          <div className="other-temp-info">
            Feels like {props.temp.feelsLike}°
            <div className="temp-max-min">
              Max/Min: {props.temp.max}°/{props.temp.min}°
            </div>
          </div>
          <div className="weather-info humidity">
            <img
              className="weather-info-icons"
              src={humidIcon}
              alt="Humidity"
            ></img>
            <span className="other-info-data"> {props.temp.humidity}%</span>
          </div>
          <div className="weather-info windspeed">
            <img
              className="weather-info-icons"
              src={windspeedIcon}
              alt="windspeed"
            ></img>
            <span className="other-info-data">{props.temp.windspeed} m/s</span>
          </div>
          <div className="weather-info uv-index">
            <img
              className="weather-info-icons"
              src={uvIndexIcon}
              alt="UV:"
            ></img>{" "}
            <span className="other-info-data">{props.temp.uvIndex}</span>
          </div>
          <div>8 day forcast below here</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
