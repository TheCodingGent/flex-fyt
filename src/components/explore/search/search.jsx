import React, { useState, useEffect } from "react";
import axios from "axios";
import GymInfo from "../gymInfo";

import "./search.scss";

const solrQueryUrl = "http://localhost:8983/solr/flexfyt_core/select?q=";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === "") {
      axios
        .get(solrQueryUrl + "*:*")
        .then((response) => setResult(response.data.response.docs));
    } else {
      axios
        .get(encodeURI(solrQueryUrl + "city:" + query + "~2"))
        .then((response) => setResult(response.data.response.docs));
    }
  }, [query]);

  return (
    <div className="search-container d-flex flex-column">
      <div className="search-bar d-flex justify-content-center">
        <input
          placeholder="Enter city name"
          type="text"
          onChange={handleInputChange}
        />
      </div>
      <div className="search-result-container d-flex justify-content-start">
        {result.map((gym) => (
          <div key={gym.id} className="search-result p-2">
            <GymInfo
              key={gym.id}
              name={gym.name}
              address={gym.address}
              location={gym.location}
              services={gym.services}
              image={gym["image-url"]}
              city={gym.city}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
