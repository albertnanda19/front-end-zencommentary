import React from 'react';

const TitleCard = () => {
  return (
    <div className="flex items-baseline justify-center">
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        fontSize: '2.8rem',
        color: 'rgba(69, 25, 150, 1)',
        textShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)' // Example shadow, adjust as needed
      }}>
        ZenCommentary.c
        <img src="/images/magnifyingglass.png" alt="Search"
             className="h-[60px] w-[55px] inline align-text-bottom ml-[-8px] pr-[2px]"
             style={{ position: 'relative', bottom: '-15px' }} />
      </h1>
    </div>
  );
};

export default TitleCard;
