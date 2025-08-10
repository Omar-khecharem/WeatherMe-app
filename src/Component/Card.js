import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Vector from "../asstes/Vector.png";
import thermo from "../asstes/thermo.png";
import Cloud from "../asstes/Cloud.png";
const Card = () => {
  const [weather, setWeather] = useState(null);
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
    <div className=" flex justify-center items-center  w-full h-[25rem] bg-gradient-to-t to-[#AD36CB] from-[#333333] text-white rounded-2xl shadow-sm shadow-white md:p-20">
      <div className="h-full flex flex-col justify-evenly w-full px-5 ">
        <div className="flex items-center gap-5">
          {weather && <h3> {weather.data.country}</h3>}
          <span>
            <img src={Vector} alt="" />
          </span>
        </div>

        <div className="flex justify-center items-center my-5">
          <img src={thermo} alt="" />
          {weather && (
            <h1 className="text-8xl mx-5">
              {weather.data.current.weather.tp}
              °C
            </h1>
          )}
          <img src={Cloud} alt="" />
        </div>
        <span>
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            weekday: "short",
          })}
        </span>

          {weather && (
            <ul className="flex justify-evenly text-center md:text-lg gap-3  ">
              <li>
                <h4>Humidity</h4>
                <span>{weather.data.current.weather.hu}%</span>
              </li>

              <li>
                <h4>Air Pressure</h4>
                <span>{weather.data.current.weather.pr} hPa</span>
              </li>
              <li>
                <h4>Wind</h4>
                <span>{weather.data.current.weather.ws} m/s</span>
              </li>
            </ul>
          )}
       
      </div>
    </div>
  );
};

export default Card;
