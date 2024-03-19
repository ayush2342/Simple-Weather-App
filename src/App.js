import React, { useState } from 'react';
import './App.css';
import RealTimeWeather from './RealTimeWeather';
import ForecastedWeather from './ForecastedWeather';

const App = () => {
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleShowWeather = () => {
    if (location.trim() === '') {
      alert('Please enter a location');
      return;
    }
    console.log('Fetching weather for:', location);
    setCurrentLocation(location);
  };

  const handleShowCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lon: longitude });
          console.log('Current location set:', { lat: latitude, lon: longitude });
        },
        error => {
          console.error('Error fetching current location:', error);
          alert('Error fetching current location. Please try again.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <><div className='Navbar'>
        Weather App</div>
    <div className="app" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg')` }}>
      
      <div className="location-input">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="showWeather" onClick={handleShowWeather}>Show Weather</button>
        <span> OR</span>
        <button className="showWeatherForCurrentLocation" onClick={handleShowCurrentLocationWeather}>Show Weather For Current Location</button>
      </div>
      {currentLocation && (
        <>
          <RealTimeWeather location={currentLocation} />
          <ForecastedWeather location={currentLocation} />
        </>
      )}
    </div>
    </>
  );
};

export default App;
