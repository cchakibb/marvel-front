import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Charger les données
      const response = await axios.get(
        "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=4c1d1203f2b6160bf992f54aa85dec17"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div>Home is ok</div>
      )}
    </div>
  );
}

export default Home;
