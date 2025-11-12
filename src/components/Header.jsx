const Header = ({ units, setUnits }) => {
  return (
    <header className="py-3 bg-primary text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="mb-0">Weather App</h2>
        <div className="d-flex align-items-center">
          <div className="me-3 text-end d-none d-md-block">
            <small>Enter a city to get current weather & 5-day forecast</small>
          </div>

          <div className="btn-group" role="group" aria-label="units">

            {/* Celsius button */}
            <button
              className={`btn btn-sm ${units === 'metric' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => setUnits('metric')}
            >
              °C / m/s
            </button>

            {/* Fahrenheit button */}
            <button
              className={`btn btn-sm ${units === 'imperial' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => setUnits('imperial')}
            >
              °F / mph
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
