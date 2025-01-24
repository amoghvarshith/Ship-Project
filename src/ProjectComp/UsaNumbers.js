import React, { useState, useEffect } from 'react';

const foodApi = "https://6793136e5eae7e5c4d8d7dde.mockapi.io/api/food/Food";

const UsaNumbers = () => {
  const [data, setData] = useState([]); // Initialize as an array for multiple items

  const functionNew = async () => {
    try {
      const newRes = await fetch(foodApi); // Fetch data from API
      const newUpd = await newRes.json(); // Parse JSON response
      setData(newUpd); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
    }
  };

  useEffect(() => {
    functionNew(); // Call the fetch function on component mount
  }, []); // Empty dependency array to ensure it runs once

  useEffect(() => {
    console.log({ data }); // Log data whenever it updates
  }, [data]); // Add `data` as a dependency

  return (
    <div>
      <form>
        {data.map((item) => (
          <div key={item.id} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
            <h1>{item.name}</h1>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", borderRadius: "10px" }}
            />
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default UsaNumbers;
