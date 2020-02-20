import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../assets/style/characters.css";

const Characters = comics => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-back-chakib.herokuapp.com/characters/"
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Page is loading ...</p>
      ) : (
        <div>
          {data.data.results.map((result, index) => {
            return (
              <Link to={"/characters/" + result.id}>
                <div className="character-thumnails">
                  <div className="character-pictures-wrapper">
                    <img
                      className="character-pictures"
                      src={
                        result.thumbnail.path + "." + result.thumbnail.extension
                      }
                      alt="Character"
                    />
                  </div>

                  <p className="character-name">{result.name}</p>

                  <p className="character-description">{result.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Characters;
