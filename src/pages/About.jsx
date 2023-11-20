import Navbar from "../components/Navbar";

const About = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#FF9209] to-[#FFD200]">
      <Navbar />
      <div className="w-full h-full">
        <div className="absolute md:top-[15%]">
          <img src="/icons/marketing.svg" className="opacity-50" />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[30rem] h-auto flex flex-col items-center gap-8">
            <div className="w-96 h-auto py-4 text-center font-poppins font-bold text-4xl border-b-4 border-black inline-block">
              <h1>Hi ZenCommers !</h1>
            </div>
            <div className="text-center text-[#451952] font-fredoka font-semibold text-xl">
              <p>
                We are a team dedicated to creating a safe and rewarding online
                experience for all users. With a focus on technological
                innovation, we are committed to providing a platform that
                facilitates positive interactions and supports the exchange of
                useful ideas. With the goal of creating an inclusive environment
                and inspiring, we continuously work to develop effective comment
                filter solutions and ensure an uplifting online experience for
                every user.
              </p>
            </div>
            <button
              className="px-12 py-2 text-lg text-[#FFD200] font-poppins font-extrabold bg-[#451952] rounded-xl"
              onClick={() => {
                window.location.href = "/our-team";
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="absolute md:top-1/2 right-[2%]">
          <img src="/icons/goodwork.svg" className="opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default About;
