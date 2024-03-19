import React, { useState, useEffect } from 'react';

const RealTimeWeather = ({ location }) => {
  const [realTimeWeather, setRealTimeWeather] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    let locationParam = '';

    if (location.lat && location.lon) 
        {
    locationParam = `${location.lat},${location.lon}`;
        } else {
    locationParam = location;
        }
    fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${locationParam}&apikey=fa1F6YD3v4JCyYyFPP8VC7tcI138Mih0`, options)
      .then(response => response.json())
      .then(data => {
        setRealTimeWeather(data);
        console.log('Real-time weather:', data);
      })
      .catch(err => console.error('Error fetching real-time weather:', err));
  }, [location]);

  return (
    <div className="weather-container real-time">
      {realTimeWeather ? (
        <>
          <h2>Real-Time Weather</h2>
          <div className="weather-info">
            <div className="weather-icon">
              <img src='https://jknewstoday.com/wp-content/uploads/2021/09/weather.png' alt="Weather Icon" />
            </div>
            <div className="weather-details">
              <p>Temperature: {realTimeWeather.data.values.temperature}°C</p>
              <p>Humidity: {realTimeWeather.data.values.humidity}%</p>
              <p>Wind Speed: {realTimeWeather.data.values.windSpeed} m/s</p>
              <p>Location: {realTimeWeather.location.name}</p>
              
            </div>
          </div>
        </>
      ) : (
        <p>Loading real-time weather...</p>
      )}
    </div>
  );
};

export default RealTimeWeather;
