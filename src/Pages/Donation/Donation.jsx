import { useEffect, useState } from "react";
import DonationPage from "./DonationPage";


const Donation = () => {
    const [donations,setDonations]=useState([]);
    const [noFound,setNoFound]=useState(false);
    const [isShowAll,setIsShowAll]=useState(false);

    useEffect(()=>{
        const donateItems=JSON.parse(localStorage.getItem('donates'))
        
        if(donateItems){
            setDonations(donateItems)
        }else{
           
            setNoFound('No Data Found')
        }
    },[])

    console.log(isShowAll)
    return (
        <div>
           {
            noFound?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  justify-center items-center">
                    {
                        isShowAll?donations?.map(card=><DonationPage key={card.id} card={card}></DonationPage>) 
                        
                        : donations?.slice(0,4).map(card=><DonationPage key={card.id} card={card}></DonationPage>)
                    }
                    </div>
                    <div onClick={()=>setIsShowAll(!isShowAll)} className="flex">
                        <button className="btn bg-[#009444] mx-auto">{isShowAll? "See Less " : "See All"}</button>
                    </div>

            </div>
           }
        </div>
    );
};

export default Donation;