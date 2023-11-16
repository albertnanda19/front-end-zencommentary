import { useState } from 'react';
import TitleCard from './components/TitleCard.jsx';

function App() {
  const [count, setCount] = useState(0);

  // Define the styles as a string
  const maskStyle = `
    .gradient-mask-chatbubble {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 800px;
      height: 800px;
      margin: auto; /* Centers the element */
      background: linear-gradient(to bottom, rgba(255, 146, 9, 0.65), rgba(255, 255, 0, 0.6));
      -webkit-mask: url('/images/chatbubble.png') center / contain no-repeat;
      mask: url('/images/chatbubble.png') center / contain no-repeat;
    }
    .title-card-container {
      position: absolute; /* Absolute positioning */
      top: 0;
      left: 0;
      right: 0;
      bottom: 40%;
      display: flex; /* Use flexbox for centering */
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      z-index: 10; /* Ensure it's above the chatbubble image */
    }
  `;

  return (
    <>
      <style>{maskStyle}</style>
      <div className="relative overflow-hidden h-screen w-screen">
        {/* Container for the gradient mask */}
        <div className="gradient-mask-chatbubble"></div>
        {/* Container for the TitleCard */}
        <div className="title-card-container">
          <TitleCard />
        </div>
      </div>
    </>
  );
}

export default App;
