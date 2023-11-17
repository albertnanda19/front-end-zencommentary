// src/pages/RedPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RedPage() {
  // Styles as a string
  const styles = `
    .red-box {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 20%;
      background-color: red; /* Red background */
      color: white; /* White text */
      font-size: 2rem;
      border-radius: 20px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="red-box">
        Bad Word Detected
        <Link to="/">Go Back</Link> {/* Link to navigate back */}
      </div>
    </>
  );
}

export default RedPage;
