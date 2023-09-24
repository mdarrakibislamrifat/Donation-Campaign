import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = card;
  return (
    <Link to={`/cards/${id}`}>
    <div>
      <div  style={{backgroundColor:card_bg_color}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative p-8 lg:p-0 m-0 overflow-x-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} alt="ui/ux review check" />
        </div>
        <div className="p-6 ">
          <h4 style={{backgroundColor:category_bg_color,color:text_color}} className="block font-sans   w-[80px] rounded-lg leading-snug tracking-normal  antialiased text-center ">
            {category}
          </h4>
          <p style={{color:text_color}} className="mt-3 block font-sans text-xl  leading-relaxed  text-gray-700 antialiased font-bold">
            {title}
          </p>
        </div>
        
      </div>
    </div>
    </Link>
  );
};

export default Card;
