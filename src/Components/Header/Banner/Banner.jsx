import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Banner = ({handleCardData}) => {
  const cards = useLoaderData();
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.text.value.toLowerCase();
    const data = cards.filter((sData) => sData.category.toLowerCase() === value);
    handleCardData(data);
  };
  

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
            <h1 className="mb-5 text-3xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Here"
                name="text"
                className="input input-bordered input-primary text-black w-full max-w-xs"
              />
              <input
                className="bg-[#FF444A] p-[13px] rounded-lg text-base font-semibold text-white"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
