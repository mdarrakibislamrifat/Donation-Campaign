import { useEffect, useState } from "react";
import DonationPage from "./DonationPage";


const Donation = () => {
    const [donations,setDonations]=useState([]);
    const [noFound,setNoFound]=useState(false)
    useEffect(()=>{
        const donateItems=JSON.parse(localStorage.getItem('donates'))
        
        if(donateItems){
            setDonations(donateItems)
        }else{
           
            setNoFound('No Data Found')
        }
    },[])
    return (
        <div>
           {
            noFound?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>
                <div className="grid grid-cols-2 gap-5  justify-center items-center">
                    {donations?.map(card=><DonationPage key={card.id} card={card}></DonationPage>)}
                    </div>

            </div>
           }
        </div>
    );
};

export default Donation;