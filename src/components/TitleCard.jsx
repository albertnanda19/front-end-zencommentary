import React from 'react';

const TitleCard = () => {
  return (
    <div className="flex items-baseline justify-center">
      <h1 className="text-4xl font-bold font-Poppins shadow-custom text-[#451952]">
        ZenCommentary.c
        <img src="/images/magnifyingglass.png" alt="Search" 
             className="h-[45px] w-[40px] inline align-text-bottom ml-[-4px] pr-[2px]" 
             style={{ position: 'relative', bottom: '-9px' }} />
      </h1>
    </div>
  );
};

export default TitleCard;
