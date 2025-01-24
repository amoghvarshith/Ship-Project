import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        padding: "10px",
        gap: "20px", 
        margin:"10px"// Adds spacing between items
    
    };

    const linkStyles = {
        color: "red",
        textDecoration: "none",
        padding: "10px 24px",
        borderRadius: "5px",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "0.3s ease",
    };

    const linkHoverStyles = {
        ...linkStyles,
        backgroundColor: "lightgray",
    };

    return (
        <nav style={navStyles}>
            <Link
                to="/"
                style={linkStyles}

            >
                Home
            </Link>
            <Link
                to="/dashboard"
                style={linkStyles}

            >
                Dashboard
            </Link>
            <Link
                to="/mobilenumbers"
                style={linkStyles}

            >
                FoodItems
            </Link>
        </nav>
    );
};

export default Navbar;
