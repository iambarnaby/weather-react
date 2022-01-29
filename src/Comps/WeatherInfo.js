const WeatherInfo = (props) => {
  return (
    <div className="weather-info-container">
      <div className="weather-info-grid">
        <div className="weather-info-head">
          <div className="weather-info location">{props.temp.loc}</div>
          <div className="weather-info time"></div>

          <div className="weather-info weather">{props.temp.weather}</div>
          <div className="icon-container">
            <img src={props.temp.iconURL} alt="icon"></img>
          </div>
          <div className="weather-info temperature">{props.temp.temp} °C</div>
        </div>
        <div className="other-info">Other info</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
