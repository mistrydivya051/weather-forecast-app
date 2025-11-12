# Weather Forecast App

A simple weather forecasting app built using **React**, **Axios**, **Bootstrap**, and **React Icons**.  
This app fetches real-time weather data from the **OpenWeatherMap API**.

---

## 1. Clone the repository
```bash
git clone https://github.com/mistrydivya051/weather-forecast-app.git
cd weather-forecast-app
```

## 2. Install dependencies
If `package.json` exists:
```bash
npm install
```

Install additional dependencies:
```bash
npm install axios bootstrap react-icons
```

## 3. Configure environment variables
Create a `.env` file in the root directory:
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```
- Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

## 4. Run the application
```bash
npm run dev
```
- The app will run on: `http://localhost:5173` (default Vite port)

---

## Features

### Current Weather
- Temperature, feels-like, humidity, wind speed, pressure, and visibility
- Sunrise and sunset times
- Current date and time next to the city name

### 5-Day Forecast
- Shows weather for the next 5 days (excluding today)
- Each day displays temperature, weather description, and icon
- Forecast uses 12:00 PM as reference time

### City Search
- Search for any city in the world
- Input cannot be empty

### Unit Switch
- Switch between Metric (°C / m/s) and Imperial (°F / mph)

---

## What I Learned
- How to set up a fast React project with **Vite**
- Using **Axios** to fetch API data
- Managing environment variables with `.env` files
- Styling with **Bootstrap** and **React Icons**
- Handling async API calls and dynamic state updates in React

---

## Difficulties Faced
- Figuring out `.env` usage with Vite
- Handling errors for invalid city names or empty input
- Dynamically updating weather data in React components
- Debugging API key issues when requests failed
