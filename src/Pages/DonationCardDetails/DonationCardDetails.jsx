
const DonationCardDetails = ({ card }) => {
   console.log(card)
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,description
  } = card || {};

  return (
    <div>
      <div className="relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6  rounded-xl  bg-clip-border text-white shadow-lg">
          <img className="w-[1320px] h-[700px]" src={picture}
          alt="img-blur-shadow" layout="fill" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default DonationCardDetails;
