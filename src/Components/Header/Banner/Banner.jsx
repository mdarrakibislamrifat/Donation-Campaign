const Banner = () => {
  return (
    <div
      className="hero h-[400px] ml-4"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0-j_at9tPKdwksdhUy0DC1nXGiGeF7TiWR7Wb_yoXc_BB5O-ZZbTg8ZZg)",
      }}
    >
      <div className="hero-overlay bg-[white] bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-3xl text-black font-bold">I Grow By Helping People In Need</h1>
          <div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button className="btn bg-[#FF444A]">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
