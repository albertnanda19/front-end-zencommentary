const Home = () => {
  const directToMain = () => {
    window.location.href = "/comment-input";
  };

  return (
    <>
      <div className="absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <img
          src="/images/comment-icon.svg"
          className="md:w-[900px] md:h-auto opacity-20"
        />
      </div>
      <section className="h-screen bg-gradient-to-b from-[#FF9209] to-[#FFD200]">
        <div className="w-full h-full flex flex-col justify-center items-center relative z-[999999]">
          <div className="flex h-20 gap-[-1px] ">
            <h1 className="text-[#451952] text-5xl font-black font-poppins">
              ZenCommentary.c
            </h1>
            <div className="h-full w-20 flex items-center ">
              <img src="/images/magnifying-glass.svg" className="w-12" />
            </div>
          </div>
          <button
            className="cursor-pointer mb-8 px-16 rounded-lg text-xl font-poppins font-extrabold text-[#F4CE14] bg-[#451952] py-1"
            onClick={directToMain}
          >
            Start
          </button>
          <div className="text-center font-fredoka text-xl">
            <p>&quot;There is a comment filter feature available </p>
            <p>
              that can help create a safer and more comfortable online
              environment.
            </p>
            <p>
              Welcome to our website, where security and a positive experience
              are a top priority.&quot;
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
