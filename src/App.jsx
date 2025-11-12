import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForeCastList';
import { fetchCurrentWeather, fetchForecast } from './utils/WeatherApi';
import { getDailyForecasts } from './utils/ForecastUtils';

function App() {
  const [city, setCity] = useState('Toronto');
  const [units, setUnits] = useState('metric');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const loadWeather = async (q) => {
    try {
      setError(null);
      const c = await fetchCurrentWeather(q, units);
      setCurrent(c);
      const f = await fetchForecast(q, units);
      setForecast(f);
      setCity(q);
    } catch (err) {
      setError(err.message || 'Unable to get weather');
      setCurrent(null);
      setForecast(null);
    }
  };

  useEffect(() => {
    // initial load
    loadWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  const handleSearch = (q) => loadWeather(q);

  return (
    <div className="app min-vh-100 d-flex flex-column">
      <Header units={units} setUnits={setUnits} />

      <main className="container my-4 flex-grow-1">
        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {current && <WeatherCard data={current} units={units} />}

        {forecast && (
          <ForecastList data={getDailyForecasts(forecast)} units={units} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
