import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCardDetails from "../DonationCardDetails/DonationCardDetails";
const DonationCard = () => {
  const [card, setCard] = useState({});
  const {id} = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCards = cards?.find((card) => card.id == id);
    setCard(findCards);
  }, [id, cards]);
  return (
    <div>
      <DonationCardDetails card={card}></DonationCardDetails>
    </div>
  );
};

export default DonationCard;
