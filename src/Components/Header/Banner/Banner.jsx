import { useState } from "react";

const Banner = () => {
  const [inputValue,setInputValue]=useState('')
  const handleSearch=(e)=>{
   setInputValue(e.target.value)
   
  }
  const handleSearchBtn=()=>{
    console.log(inputValue)
  }
  return (
    <div className="p-4">
      <div
      className="hero h-[400px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0-j_at9tPKdwksdhUy0DC1nXGiGeF7TiWR7Wb_yoXc_BB5O-ZZbTg8ZZg)",
      }}
    >
      <div className="hero-overlay bg-[white] bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-3xl text-black font-bold">I Grow By Helping People In Need</h1>
          <div>
          <input value={inputValue} onChange={handleSearch}  id="searchField" type="text" placeholder="Type here" className="input text-black input-bordered w-full max-w-xs" />
          <button onClick={handleSearchBtn} className="btn bg-[#FF444A]">Search</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
