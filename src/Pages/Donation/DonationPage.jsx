import React from "react";
import { NavLink } from "react-router-dom";

const DonationPage = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    description,
    price,
  } = card || {};
  return (
    <div>
      <div className=" py-6 ">
        <div
          style={{ backgroundColor: card_bg_color }}
          className="relative rounded-xl  "
        >
          <div className="flex  rounded-xl  bg-clip-border text-white shadow-lg">
            <div>
              <img
                className="relative h-[200px] w-[300px] "
                src={picture}
                alt="img-blur-shadow"
                layout="fill"
              />
            </div>

            <div className="p-4 text-black">
              <h2
                className="w-[80px] text-center p-1 rounded-lg"
                style={{
                  color: text_color,
                  backgroundColor: category_bg_color,
                }}
              >
                {category}
              </h2>
              <h5 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
              </h5>
              <h2 style={{ color: text_color }}>${price}</h2>

              <button
                style={{ backgroundColor: text_color }}
                className="absolute text-white p-2 rounded-lg  font-semibold"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
