import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
const api = {
  key: '94c7f638b100b540a24ec0fc2da598e0',
  url: `http://api.weatherstack.com/`
}

function App() {

  const [query, Setquery] = useState('');
  const [weather, Setweather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      axios.get(`${api.url}current?access_key=${api.key}&query=${query}`)
        .then((response) => {
          Setquery('')
          Setweather(response)
        });
    }
  }

  const dataBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.data != 'undefined') ? ((weather.data.current.temperature > 16) ? 'App warm' : 'App') : 'App'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            name="query"
            className="search-bar"
            placeholder="Search..."
            onChange={e => Setquery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
        </div>
        {(typeof weather.data != 'undefined') ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.data.request.query}
              </div>
              <div className="date">{dataBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {weather.data.current.temperature}°C
              </div>
              <div className="weather">
                {weather.data.current.weather_descriptions[0]}
              </div>
            </div>
          </>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;