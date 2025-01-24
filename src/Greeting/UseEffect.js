import React, { useState, useEffect } from "react";

function Neweffect() {
  const [update, setUpdate] = useState([]); // Initialize as an array
  const [isFetching, setIsFetching] = useState(true); // State to control auto-fetching

  useEffect(() => {
    let interval;

    if (isFetching) {
      const fetchCatFact = () => {
        fetch("https://catfact.ninja/fact")
          .then((response) => response.json())
          .then((json) => {
            setUpdate((prev) => [...prev, json]); // Append the new fact
          });
      };

      interval = setInterval(fetchCatFact, 1000); // Start fetching facts every second
    }

    return () => clearInterval(interval); // Cleanup on unmount or toggle
  }, [isFetching]); // Re-run effect whenever `isFetching` changes

  const toggleFetching = () => {
    setIsFetching((prev) => !prev); // Toggle the fetching state
  };

  return (
    <div>
      <h1 >Cat Facts</h1>
      <button onClick={toggleFetching}>
        {isFetching ? "Stop Fetching" : "Start Fetching"}
      </button>
      <ol>
        {update.map((item, index) => (
          <li key={index}>{item.fact}</li>
        ))}
      </ol>
    </div>
  );
}

export default Neweffect;
