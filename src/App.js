import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card/Card";
import Buttons from "./components/Button/Button";
import ErrorComponent from "./components/Error/Error";
import Header from "./components/Header/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const [item, setItem] = useState(data);

  const menuItems = [...new Set(data.map((Val) => Val.slug))];

  const filterItem = (curcat) => {
    async function fetchPhotos() {
      await axios
        .get(
          `https://api.unsplash.com/topics/${curcat}/photos?client_id=${clientId}`
        )
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    }
    fetchPhotos();
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://api.unsplash.com/topics?client_id=${clientId}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    }
    fetchData();
  }, [item, clientId]);

  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <div>
          <div>
            <Header filterItem={filterItem} />
            <div>
              <div>
                <Buttons filterItem={filterItem} menuItems={menuItems} />
              </div>
              <div>
                <Card item={item} data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
