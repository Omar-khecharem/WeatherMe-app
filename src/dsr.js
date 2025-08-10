import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [test, setTest] = useState("");

  const getWeather = async () => {
    try {
      const res = await axios.get(
        "http://api.airvisual.com/v2/nearest_city?key=037c8bd5-8cd1-4699-a0bc-701833151bf0"
      );

      setWeather(res.data);
    } catch (e) {
      console.log(e);
      alert("Error fetching weather data");
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div>
      {weather && <h1> {weather.data.city}</h1>}
      {weather && <h1> {weather.data.current.weather.tp}</h1>}
    </div>
  );
};

export default App;
