import React, { useEffect, useState } from "react";
import Logo from "../asstes/Logo.png"
const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white flex  items-center justify-between py-5  ">
      <div className="">
        <img src={Logo} alt="" />
       
        <h1 className="text-3xl"> WeatherMe</h1>
        <span className="  float-right ">{dateTime.toLocaleTimeString()}</span>
       
      </div>

      <ul className="flex   gap-7">
        <li
          tabIndex={0}
          className="cursor-pointer flex flex-col group focus:ring-0"
        >
          <span className="text-2xl group-focus:font-bold group-hover:font-bold">Today</span>
          <span className="h-[3px] w-0  group-hover:w-full  group-focus:w-full  bg-[#695D5D]  transition-all duration-300 ease-in-out"></span>
        </li>
        <li
          tabIndex={0}
          className="cursor-pointer  flex-col group focus:ring-0 hidden"
        >
          <span className="text-2xl group-focus:font-bold group-hover:font-bold">Tomorrwow</span>
          <span className="h-[3px] w-0  group-hover:w-full  group-focus:w-full  bg-[#695D5D]  transition-all duration-300 ease-in-out"></span>
        </li>
        <li
          tabIndex={0}
          className="cursor-pointer flex flex-col group focus:ring-0 hidden"
        >
          <span className="text-2xl group-focus:font-bold group-hover:font-bold text-nowrap">Monthly Forecast</span>
          <span className="h-[3px] w-0  group-hover:w-full  group-focus:w-full  bg-[#695D5D]  transition-all duration-300 ease-in-out"></span>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
