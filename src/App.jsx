import { useState, useEffect} from 'react'
import './App.css'
import WeatherComponent from './Weather';


function App() {
  const [city, setCity] = useState('tokyo');//初期値
  const handleChange =(event) => {
    setCity(event.target.value);
  }
  useEffect(()=>{
    alert(`選択された都市は: ${city}`);
  }, [city])
  return (
    <>
    <select onChange={handleChange}>
       <option value="tokyo">東京</option>
       <option value="osaka">大阪</option>
       <option value="sapporo">札幌</option>
    </select>
    <WeatherComponent/>
    </>
  )
}

export default App
