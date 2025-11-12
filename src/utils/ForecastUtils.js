
export function getDailyForecasts(forecastData) {
  if (!forecastData || !forecastData.list) return [];

  const byDate = {};

  // usually 3 hours each forecast item
  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // Extract the date (YYYY-MM-DD)
    const time = item.dt_txt.split(' ')[1]; // Extract the time (HH:MM:SS)

    // If this date does not exist, create an empty array for it
    if (!byDate[date]) byDate[date] = [];

    // Store both the item and its time for sorting later
    byDate[date].push({ item, time });
  });

  // Get all the dates available in the forecast data and sort them chronologically
  const dates = Object.keys(byDate).sort();

  // Exclude the current day
  const filteredDates = dates.slice(1); // Removes todays date

  const daily = filteredDates.map(date => {
    const entries = byDate[date];
    const target = '12:00:00'; // use noon as the representative time of day

    // Sort each day entries based on how close they are to 12:00 PM
    entries.sort(
      (a, b) =>
        Math.abs(timeToNum(a.time) - timeToNum(target)) -
        Math.abs(timeToNum(b.time) - timeToNum(target))
    );

    // Return the item (weather data) closest to 12:00 PM
    return entries[0].item;
  });

  // Return only the next 5 days of forecasts
  return daily.slice(0, 5);
}

// converts a time string (HH:MM:SS) into seconds for easier comparison
function timeToNum(t) {
  const [h, m, s] = t.split(':').map(Number); // Split string into numbers
  return h * 3600 + m * 60 + s; // Convert hours/minutes/seconds to total seconds
}
