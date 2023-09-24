const Card = ({ card }) => {
  const {
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = card;
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {title}
          </p>
        </div>
        <div className="flex items-center justify-between p-6"></div>
      </div>
    </div>
  );
};

export default Card;
