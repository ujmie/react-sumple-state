import { useState, useEffect } from 'react';

// 定数URLの管理
const WEATHER_API_URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

// エラーハンドリングの共通関数
const handleError = (error) => {
 console.error("Error:", error);
 return 'データの取得に失敗しました';
};

// データ取得の非同期関数
const fetchWeatherData = async (url) => {
 const response = await fetch(url);
 if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
 return response.json();
};
const WeatherComponent = () => {
 
  const [data, setData] = useState({
    weatherData: [{timeSeries: [{areas: [ {weathers: [],waves:[]}]}]}],
    error: null
  });

  useEffect(() => {
    const fetchData = async () => { //useEffect内に非同期に天気データを取得してくる関数を定義
      try {
        const weatherData = await fetchWeatherData(WEATHER_API_URL);
        setData({ weatherData, error: null });//成功時はuseStateフックを使って天気データを保存
      } catch (error) {
        setData({ weatherData: null, error: handleError(error) });//失敗時はエラーメッセージを表示
      }
    };
    fetchData();//fetchData()を実行する
  }, []);//useEffectの依存配列なのでマウント時に実行される
  return (
    <div><h1>Weather Data</h1><pre>{JSON.stringify(data.weatherData[0].timeSeries[0].areas[0].weathers,null, 2)}</pre>
    <pre>{JSON.stringify(data.weatherData[0].timeSeries[0].areas[0].waves,null, 2)}</pre>
    </div>
  );
 };
 export default WeatherComponent;