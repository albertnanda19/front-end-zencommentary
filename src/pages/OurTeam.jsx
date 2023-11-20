import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const OurTeam = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#FF9209] to-[#FFD200]">
      <Navbar />
      <div className="absolute top-[35%]">
        <img src="/icons/box.svg" className="opacity-10" />
      </div>
      <div className="absolute right-0">
        <img src="/icons/box.svg" className="opacity-10" />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        <div className="text-[#451952] text-5xl font-black font-patua">
          <h1>ZenTeam</h1>
        </div>
        <Carousel />
        <button
          className="px-12 py-2 text-lg text-[#FFD200] font-poppins font-extrabold bg-[#451952] rounded-xl"
          onClick={() => {
            window.location.href = "/about";
          }}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
