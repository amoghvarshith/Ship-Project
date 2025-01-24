import React from 'react';
import { Link } from 'react-router-dom';

const MobileNumber = () => {
  const containerStyle = {
    display: "flex",           // Flexbox layout
    justifyContent: "center",  // Center items horizontally
    alignItems: "center",      // Center items vertically
    gap: "20px", 
    postion:"fixed"   ,            // Space between items
    margin: "20px",
    backgroundColor: "lightgray",
    padding: "10px",
  };

  const buttonStyle = {
    textDecoration: "none", // Remove underline from links
    color: "white",
    backgroundColor: "green",
    padding: "10px 20px",
    borderRadius: "5px",
    textAlign: "center",
    display: "inline-block", // Ensure buttons behave like inline elements
    fontSize: "16px",
  };

  return (
    <nav>
    <div style={containerStyle}>
      <Link to="/" style={buttonStyle}>BackGo</Link>
      <Link to="/usaNumbers" style={buttonStyle}>USA Dishes</Link>
      <Link to="/franceNumbers" style={buttonStyle}>France Dishes</Link>
      <Link to="/italyNumbers" style={buttonStyle}>Italy Dishes</Link>
      <Link to="/germanyNumbers" style={buttonStyle}>Germany Dishes</Link>
    </div>
    </nav>
  );
};

export default MobileNumber;
