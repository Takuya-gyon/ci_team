import React, { useState, useEffect } from 'react';
import './WeatherComponent.css'; // スタイルシートのインポート

interface Weather {
    location: string;
    temperature: string;
    description: string;
}

function WeatherComponent() {
  const [weather, setWeather] = useState<Weather | null>(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '67e4010a8f58b6291c5e44ec596adc1c'; // 環境変数からAPIキーを取得
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Sakai,Naka&appid=${apiKey}&units=metric&lang=ja`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather({
          location: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div id="wheather-wrapper">
      {weather && (
        <div className="sakai-weater-container">
          <h3 style={{position: 'relative', top: '10px'}}> {weather.location}の天気</h3>
          <p>気温: {weather.temperature}°C</p>
          <p style={{position: 'relative', bottom: '20px'}}>天候: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;


