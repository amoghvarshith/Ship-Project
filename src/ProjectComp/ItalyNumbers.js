import React, { useState } from "react";

const ItalyNumbers = () => {
  const outerCss = {
    margin: "5px",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "20px",
  };

  const inCss = {
    margin: "10px",
    justifyContent: "center",
    gap: "20px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    width: "300px",
    transition: "all 0.2s ease",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const { username, email, password, mobilenumber } = data;

  const handleAll = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(data);

    if (username.length <= 5) {
      alert("Username must be more than 5 characters!");
    } else if (password.length <= 8) {
      alert("Password must be more than 8 characters!");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleForm} style={outerCss}>
        <center>
          <div style={inCss}>
            <label style={labelStyle}>UserName</label>
            <input
              onChange={handleAll}
              type="text"
              name="username"
              placeholder="username"
              style={inputStyle}
            />
            <label style={labelStyle}>Email</label>
            <input
              onChange={handleAll}
              type="email"
              name="email"
              placeholder="email"
              style={inputStyle}
            />
            <label style={labelStyle}>Password</label>
            <input
              onChange={handleAll}
              type="password"
              name="password"
              placeholder="Password"
              style={inputStyle}
            />
            <label style={labelStyle}>Mobile Number</label>
            <input
              onChange={handleAll}
              type="tel"
              name="mobilenumber"
              placeholder="Mobile Number"
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Submit!
            </button>
          </div>
        </center>
      </form>
    </div>
  );
};

export default ItalyNumbers;
