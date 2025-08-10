import React, { useState } from 'react';
import Search from "../asstes/search_.png";

const Input = ({ country }) => {
  const [content, setContent] = useState("");

  return (
    <div className="flex">
      <img
        src={Search}
        alt=""
        className="px-5 py-2 rounded-l-xl bg-[#D9D9D9]"
      />
      <input
        type="text"
        placeholder="Search location..."
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        className="w-[25rem] h-[4rem] rounded-r-xl bg-[#D9D9D9] indent-4 border-none outline-none"
      />
    </div>
  );
};

export default Input;
