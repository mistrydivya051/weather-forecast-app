# Weather Forecast App

A simple weather forecasting app built using **React**, **Axios**, **Bootstrap**, and **React Icons**.  
This app fetches real-time weather data from the **OpenWeatherMap API**.

---

## Setup Instructions

### Create a new Vite project
```bash
npm create vite@latest
```

### Go to your project folder
```bash
cd weather-app
```

### Install dependencies
```bash
npm install axios bootstrap react-icons
```

### Get your API key
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Copy your **API key**

### Create a `.env` file
In the root folder of your project, create a file named `.env` and add:
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

### Run the app
```bash
npm run dev
```

---

## Features
- **Current Weather**
  - Shows temperature, feels-like temperature, humidity, wind speed, pressure, and visibility.
  - Shows **sunrise and sunset times**.
  - Displays **current date and time** next to the city name.

- **5-Day Forecast**
  - Shows weather for the next **5 days**, not including today.
  - Each day has temperature, weather description, and an icon.
  - Forecast uses **12:00 PM** as the reference time.

- **City Search**
  - Search for **any city in the world**.
  - Won’t search if the input is empty.

- **Unit Switch**
  - Switch between **Metric (°C / m/s)** and **Imperial (°F / mph)**.


---

## What I Learned
- How to use **Vite** for fast React setup  
- Using **Axios** to fetch API data  
- Managing environment variables with `.env` files  
- Styling with **Bootstrap** and icons with **React Icons**  
- Handling async API calls and state updates in React  

---

## Difficulties Faced
- Figuring out how to properly use `.env` with Vite  
- Handling errors for invalid city names or empty input  
- Understanding how to update the weather data dynamically  
- Debugging API key issues when requests failed  

# weather-forecast-app
