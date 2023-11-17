// src/components/StartButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartButton = () => {
  const navigate = useNavigate();

  // Styles specific to the StartButton
  const buttonStyles = `
    .start-button {
      padding: 5px 60px;
      background-color: rgba(69, 25, 150, 1);
      mix-blend-mode: multiply;
      color: #F4CE14;
      border: none;
      border-radius: 15px;
      font-family: 'Poppins', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      position: absolute;
      top: 42%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: background-color 0.3s;
      z-index: 20;
    }
    .start-button:hover {
      background-color: #403557;
    }
  `;

  const handleClick = () => {
    navigate('/page2');
  };

  return (
    <>
      <style>{buttonStyles}</style>
      <button className="start-button" onClick={handleClick}>
        Start
      </button>
    </>
  );
};

export default StartButton;
