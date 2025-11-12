const ForecastList = ({ data, units }) => {
  // check forecast data
  if (!data || data.length === 0) return null;
  const temperatureUnit = units === "metric" ? "°C" : "°F";

  return (
    <div className="mt-4 fade-in">
      <h4 className="mb-3 text-center">5-Day Forecast</h4>
      <div className="row justify-content-center">

        {/* display forecast data */}
        {data.map((day, idx) => (
          
          <div key={idx} className="col-6 col-md-2 mb-3">
            <div className="card text-center p-2 weather-card h-100">

              <div className="fw-semibold">
                {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              {/* add weather icon */}
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="mx-auto weather-icon"
              />

              {/* display the average temperature for that day */}
              <div className="fw-bold">
                {Math.round(day.main.temp)}{temperatureUnit}
              </div>

              {/* display weather condition */}
              <small className="text-muted text-capitalize">
                {day.weather[0].description}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ForecastList;
