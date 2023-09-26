import { useLoaderData } from "react-router-dom";
import {useState,useEffect} from "react"
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const cards=useLoaderData();
    const [cardsData,setCardsData]=useState(cards);
    useEffect(()=>{
        setCardsData(cards)
    },[cards])
    const handleCardData=(data)=>{
        setCardsData(data)
    }
    return (
        <div>
           <div className="bg-[white] bg-opacity-75">
           <Banner handleCardData={handleCardData}></Banner>
           </div>
           <Cards cards={cardsData}></Cards>
        </div>
    );
};

export default Home;