

const Banner = () => {
    return (
        <div className="h-[20vh] mb-10 lg:mb-8">
            <div className="py-6 mb-10 lg:mb-8">
            <h1 className="text-xl  lg:text-3xl font-bold flex justify-center items-center ">I Grow By Helping People In Need</h1>
           <div className="flex  justify-center items-center mt-4">
           <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
            <button className="btn bg-[#FF444A]">Search</button>
           </div>
            </div>
        </div>
    );
};

export default Banner;