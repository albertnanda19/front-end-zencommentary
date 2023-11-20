const Navbar = () => {
  return (
    <div className="w-full flex justify-between h-auto pt-11 px-20 absolut z-[999] bg-transparent">
      <div className="flex h-14 gap-[-1px] ">
        <h1 className="text-[#451952] text-3xl font-black font-poppins">
          ZenCommentary.c
        </h1>
        <div className="h-full w-20 flex items-center ">
          <img src="/images/magnifying-glass.svg" className="w-8" />
        </div>
      </div>
      <div className="flex gap-10">
        <img
          src="/icons/home.svg"
          className="w-8 cursor-pointer"
          onClick={() => {
            window.location.href = "/comment-input";
          }}
        />
        <img
          src="/icons/people.svg"
          className="w-8 cursor-pointer"
          onClick={() => {
            window.location.href = "/about";
          }}
        />
        <img
          src="/icons/logout.svg"
          className="w-8 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
