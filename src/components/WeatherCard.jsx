import { WiStrongWind } from 'react-icons/wi';

const WeatherCard = ({ data, units }) => {
    if (!data) return null;

    // Determine temperature and wind speed units
    const temperatureUnit = units === "metric" ? "°C" : "°F";
    const windSpeedUnit = units === "metric" ? "m/s" : "mph";

    // Format date 
    const formatDate = (unix) =>
        new Date(unix * 1000).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
        });

    // Format time only for sunrise, sunset, and current time
    const formatTime = (unix) =>
        new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="card weather-card p-3 fade-in mb-3">
            <div className="d-flex flex-column flex-md-row align-items-center">
                {/* Weather icon section */}
                <div className="text-center" style={{ minWidth: 140 }}>
                    <img
                        className="weather-icon"
                        alt={data.weather[0].description}
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        style={{ width: 96, height: 96 }}
                    />
                </div>

                {/* Weather details section */}
                <div className="flex-grow-1 ms-md-3">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            {/* City name and country code */}
                            <h3 className="mb-0">
                                {data.name}{data.sys?.country ? `, ${data.sys.country}` : ''}
                            </h3>

                            {/* Weather description */}
                            <small className="text-capitalize">{data.weather[0].description}</small>

                            {/* Display local date and time together */}
                            <div className="text-muted">
                                {formatDate(data.dt)} — {formatTime(data.dt)}
                            </div>
                        </div>

                        {/* Temperature display with feels like information */}
                        <div className="text-end">
                            <h1 className="mb-0">{Math.round(data.main.temp)}{temperatureUnit}</h1>
                            <div className="small text-muted">
                                Feels like {Math.round(data.main.feels_like)}{temperatureUnit}
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Weather details grid (humidity, wind, pressure, etc.) */}
                    <div className="row text-center text-md-start">
                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Humidity</small>
                            <strong>{data.main?.humidity}%</strong>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Wind</small>
                            <strong>
                                <WiStrongWind style={{ verticalAlign: 'middle' }} /> {data.wind?.speed} {windSpeedUnit}
                            </strong>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Pressure</small>
                            <strong>{data.main?.pressure} hPa</strong>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Visibility</small>
                            <strong>{(data.visibility ? data.visibility / 1000: '—')} km</strong>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Sunrise</small>
                            <strong>{data.sys?.sunrise ? formatTime(data.sys.sunrise): '—'}</strong>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <small className="d-block text-muted">Sunset</small>
                            <strong>{data.sys?.sunset ? formatTime(data.sys.sunset): '—'}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
