import React from "react";
import Navbar from "./Component/Navbar";

import Card from "./Component/Card";

const App = () => {
  return (
    <div className="App   bg-myblack h-screen w-full md:px-40 sm:px-24 px-10 overflow-hidden">
      <Navbar />
      {/* <div className=" flex justify-center relative  my-10">
        <Input />
      </div> */}
     <div className="mt-20">
       <Card/>
     </div>
    </div>
  );
};

export default App;
