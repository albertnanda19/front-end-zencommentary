import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TitleCard from './components/TitleCard';
import StartButton from './components/StartButton'; // Import the StartButton component
import Page2 from './Page2'; // Correct path to Page2
import GreenPage from './GreenPage'; // Import the GreenPage component
import RedPage from './RedPage'; // Import the RedPage component
import AboutUs from './AboutUs';


function App() {

  // Define the styles as a string
  const styles = `
    .gradient-mask-chatbubble {
      position: absolute;
      top: 5%;
      left: 0;
      right: 0;
      bottom: 0;
      width: 750px;
      height: 90vh;
      margin: auto; /* Centers the element */
      background: linear-gradient(to bottom, rgba(255, 146, 9, 0.65), rgba(255, 255, 0, 0.6));
      -webkit-mask: url('/images/chatbubble.png') center / contain no-repeat;
      mask: url('/images/chatbubble.png') center / contain no-repeat;
    }
    .title-card-container {
      position: absolute; /* Absolute positioning */
      top: 0;
      left: 1%;
      right: 1%;
      bottom: 31.5%;
      display: flex; /* Use flexbox for centering */
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      z-index: 10; /* Ensure it's above the chatbubble image */
      mix-blend-mode: multiply;
    }
    
    .info-text {
      position: absolute; /* Position the text below the button */
      width: calc(100% - 2rem); /* Adjust width as needed, with some padding */
      text-align: center; /* Center the text horizontally */
      bottom: 43.5%; /* Adjust to match the position in Figma */
      font-family: 'Poppins', cursive; /* Fredoka One font */
      font-weight: bold;
      font-size: 16px; /* Adjust to match the font size in Figma */
      color: #000000; /* Text color */
      padding-left: 11.5rem; /* Padding to ensure text doesn't touch the sides */
      padding-right: 10rem; /* Padding to ensure text doesn't touch the sides */
    }
  `;

  return (
    <BrowserRouter>
      <style>{styles}</style>
      <Routes>
        <Route path="/" element={
          <>
            <div className="gradient-mask-chatbubble"></div>
            <div className="title-card-container">
              <TitleCard />
            </div>
            <StartButton />
            <p className="info-text">
              "There is a comment filter feature available 
              <br /> 
              that can help create a safer and more comfortable online environment.
              <br />
              Welcome to our website, where security and a positive experience are a top priority."
            </p>
          </>
        } />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/green-page" element={<GreenPage />} /> // The green box component
        <Route path="/red-page" element={<RedPage />} /> // The red box component
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
