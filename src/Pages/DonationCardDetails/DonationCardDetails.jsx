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
      <div className="relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" mx-4 -mt-6  rounded-xl  bg-clip-border text-white shadow-lg">
          <img className="relative w-[1320px] h-[620px]" src={picture}
          alt="img-blur-shadow" layout="fill" />
         
        </div>
        <button style={{backgroundColor:text_color}} onClick={handleAddToDonate} className="absolute -mt-16 ml-10 p-2 rounded-lg text-white font-semibold">Donate ${price}</button>
        
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
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
