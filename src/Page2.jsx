// src/pages/Page2.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/TitleCard';
import TitleCard from './components/TitleCard';
import { BsPeopleFill } from 'react-icons/bs';

function Page2() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    // Check if the input includes the word 'fuck'
    if (inputValue.toLowerCase().includes('fuck')) {
      navigate('/red-page'); // Navigate to the red page
    } else {
      navigate('/green-page'); // Navigate to the normal page (if not a bad word)
    }
  };

  const handleNavigate = () => {
    navigate('/about-us'); // This will navigate to the AboutUs page when the icon is clicked
  };

  // Styles as a string
  const styles = `
    body, html {
      margin: 0;
      padding: 0;
      overflow: hidden; /* Prevents scrolling */
      height: 100vh; /* Ensures full height */
    }
    .title-card-position {
      position: absolute;
      top: 7vh; // Adjust to the vertical position from Figma
      left: 50vw; // This will now affect the element's position
      transform: translateY(-50%); // This only centers vertically now
      width: 60vw; // Example width, adjust based on Figma design
      z-index: 10; // Make sure it's on top of other elements if needed
    }
    .thumbs-up {
      position: fixed; /* Use fixed to stick the image to the side */
      top: 50%; /* Center vertically */
      left: -16%; /* Stick to the left edge */
      transform: translateY(-50%); /* Align center vertically */
      width: 45vw; /* Adjust the width as needed */
      height: 45vh; /* Adjust the height as needed */
      background: url('/images/Like.png') center / contain no-repeat; /* Adjust image path */
      background: linear-gradient(to bottom, rgba(255, 146, 9, 1), rgba(255, 255, 0, 1));
      -webkit-mask: url('/images/Like.png') center / contain no-repeat;
      mask: url('/images/Like.png') center / contain no-repeat;
    }
    .thumbs-down {
      position: fixed; /* Use fixed to stick the image to the side */
      top: 50%; /* Center vertically */
      right: -0.1%; /* Stick to the right edge */
      transform: translateY(-50%); /* Align center vertically */
      width: 15vw; /* Adjust the width as needed */
      height: 30vh; /* Adjust the height as needed */
      background: url('/images/Dislike.png') center / contain no-repeat; /* Adjust image path */
      background: linear-gradient(to bottom, rgba(255, 146, 9, 1), rgba(255, 255, 0, 1));
      -webkit-mask: url('/images/Dislike.png') center / contain no-repeat;
      mask: url('/images/Dislike.png') center / contain no-repeat;
    }
    .heart-up {
      position: fixed; /* Use fixed to stick the image to the top left corner */
      top: 29.5%; /* Align to the top edge */
      left: 6%; /* Align to the left edge */
      width: 10vw; /* Adjust the width as needed */
      height: 10vh; /* Adjust the height as needed */
      background: url('/images/LikeHeart.png') center / contain no-repeat; /* Adjust image path */
      background: rgba(255, 146, 9, 0.7);
      -webkit-mask: url('/images/LikeHeart.png') center / contain no-repeat;
      mask: url('/images/LikeHeart.png') center / contain no-repeat;
    }
    .heart-down {
      position: fixed; /* Use fixed to stick the image to the top right corner */
      top: 60%; /* Align to the top edge */
      right: 4.5%; /* Align to the right edge */
      width: 12vw; /* Adjust the width as needed */
      height: 12vh; /* Adjust the height as needed */
      background: url('/images/DislikeHeart.png') center / contain no-repeat; /* Adjust image path */
      background: linear-gradient(to bottom, rgba(255, 146, 9, 0.7) -1%, rgba(255, 255, 0, 1));
      -webkit-mask: url('/images/DislikeHeart.png') center / contain no-repeat;
      mask: url('/images/DislikeHeart.png') center / contain no-repeat;
    }

    .textbox-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%; /* Adjust based on your design */
      height: 20%; /* Adjust based on your design */
      background-color: #6A1B9A; /* Your desired purple color */
      border-radius: 20px; /* Rounded corners */
      padding: 1rem; /* Space inside the container */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); /* Optional shadow for depth */
    }

    .textbox {
      width: 100%; /* Fill the container width */
      height: 100%; /* Fill the container height */
      border: none;
      background: none;
      color: white; /* Text color */
      font-size: 1.5rem; /* Text size */
      outline: none; /* Remove the default focus outline */
    }

    .confirm-button {
      padding: 10px 20px; /* Button padding */
      background-color: #4527A0; /* Button color */
      color: white; /* Button text color */
      border: none; /* No border */
      border-radius: 10px; /* Rounded button edges */
      font-size: 1rem; /* Button text size */
      cursor: pointer; /* Pointer cursor on hover */
      outline: none; /* Remove the default focus outline */
      transition: background-color 0.2s; /* Smooth background transition */
    }

    .confirm-button:hover {
      background-color: #5E35B1; /* Darker shade on hover */
    }

    .icon-button {
      position: fixed;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      z-index: 1000;
      color: #000; // Set the color to black or any color as needed
      font-size: 2rem; // Set the icon size. Adjust as needed.
    }

  `;

  const titleCardStyle = {
    position: 'absolute',
    top: '10%', // Example position, adjust based on Figma design
    left: '50%',
    transform: 'translate(-50%, -10%)', // Adjust based on Figma design
    width: '60%', // Example width, adjust based on Figma design
    // ... other styling properties ...
  };

  return (
    <>
      <style>{styles}</style>
      <div className="title-card-position">
        <TitleCard />
      </div>
      <form onSubmit={handleSubmit} className="textbox-container">
        <input 
          type="text" 
          className="textbox" 
          placeholder="Type here..." 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} // Update the inputValue state on change
        />
        <button type="submit" className="confirm-button">Confirm</button>
      </form>
      <div className="thumbs-up"></div> {/* Left side thumbs up image */}
      <div className="thumbs-down"></div> {/* Right side thumbs down image */}
      <div className="heart-up"></div> {/* Top left heart image */}
      <div className="heart-down"></div> {/* Top right heart image */}
      <BsPeopleFill className="icon-button" onClick={handleNavigate} size={30} />
    </>
  );
}

export default Page2;
