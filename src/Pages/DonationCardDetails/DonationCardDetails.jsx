import swal from 'sweetalert';
const DonationCardDetails = ({ card }) => {
 
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,description,price
  } = card || {};

  const handleAddToDonate=()=>{
    const cardArray=[];
    const donateItems=JSON.parse(localStorage.getItem('donates'))
    if(!donateItems){
      cardArray.push(card);
      localStorage.setItem('donates',JSON.stringify(cardArray))
      swal("Good job!", "Donation Done", "success");
    }else{
      const isExist=donateItems.find(item=>item.id ===id)
      if(!isExist){

        cardArray.push(...donateItems,card)
        localStorage.setItem('donates',JSON.stringify(cardArray))
        swal("Good job!", "Donation Done", "success");
      }else{
        swal("Error!", "Already You Are Donated. Thank You!!", "error");
      }

    
  }
}
  return (
    <div>


    <div className='w-full grid justify-start gap-2'>
    
    <div className='grid justify-center align-middle mt-10'>
      <img src={picture}   className=' h-[60vh]  w-full ' />
      <div className='bg-black bg-opacity-25  sm:h-16
       -mt-16   '>
        
        <button style={{backgroundColor:text_color}} onClick={handleAddToDonate} className="ml-4 mt-2 p-2 rounded-lg text-white font-semibold">Donate ${price}</button>
        
         </div>
         <div className='mt-8 '>
          <h1 className='text-2xl mb-4 font-bold '>{title}</h1>
          <p className='w-full'>{description}</p>
         </div>
       
    </div>
    
    
    
      </div>
    
      
    </div>
  );
};

export default DonationCardDetails;
