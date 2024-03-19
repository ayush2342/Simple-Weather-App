import React, { useState, useEffect } from 'react';

const ForecastedWeather = ({ location }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    let locationParam = '';

    if (location.lat && location.lon) 
        {
    locationParam = `${location.lat},${location.lon}`;
        } else {
    locationParam = location;
        }

    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${locationParam}&timesteps=1d&timesteps=1h&apikey=fa1F6YD3v4JCyYyFPP8VC7tcI138Mih0`, options)
      .then(response => response.json())
      .then(data => {
        const hourlyData = data.timelines.hourly.slice(0, 8).map(hour => ({
          time: hour.time,
          temperature: hour.values.temperature,
          humidity: hour.values.humidity,
          windSpeed: hour.values.windSpeed
        }));
        setHourlyForecast(hourlyData);

        const dailyData = data.timelines.daily.slice(0, 4).map(day => ({
          time: day.time,
          temperature: day.values.temperatureAvg,
          humidity: day.values.humidityAvg,
          windSpeed: day.values.windSpeedAvg
        }));
        setDailyForecast(dailyData);

        console.log('Forecasted weather:', data);
      })
      .catch(err => console.error('Error fetching forecasted weather:', err));
  }, [location]);

  return (
    <div className="weather-container forecasted">
      <div>
        <h2>Hourly Weather Forecast for Next 8 Hours</h2>
        <div className="forecast-info">
          {hourlyForecast.map((item, index) => (
            <div key={index} className="forecast-card">
              <p>Time: {new Date(item.time).toLocaleString()}</p>
              <p>Temperature: {item.temperature}°C</p>
              <p>Humidity: {item.humidity}%</p>
              <p>Wind Speed: {item.windSpeed} m/s</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Daily Weather Forecast for Next 4 Days</h2>
        <div className="forecast-info">
          {dailyForecast.map((item, index) => (
            <div key={index} className="forecast-card">
              <p>Time: {new Date(item.time).toLocaleDateString()}</p>
              <p>Temperature: {item.temperature}°C</p>
              <p>Humidity: {item.humidity}%</p>
              <p>Wind Speed: {item.windSpeed} m/s</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastedWeather;
