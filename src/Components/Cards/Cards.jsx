import Card from "./Card";


const Cards = ({cards}) => {
    return (
        <div className="grid grid-cols-1 ml-6 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;