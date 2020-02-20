import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comic = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-chakib.herokuapp.com/comic/${id}`
      );
      setData(response.data);
      console.log(response.data);

      setIsLoading(false);
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

                <p className="comic-title">{result.title}</p>

                <p className="comic-description">{result.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comic;
