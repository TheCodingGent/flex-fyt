import React, { useState, useEffect } from "react";
import axios from "axios";
import GymInfo from "../gymInfo";

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
    <div className="search-container">
      <div className="container">
        <div className="row">
          <div className="col search-bar section-description">
            <input
              placeholder="Enter city name"
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row search-result-container">
          {result.map((gym) => (
            <div className="col-md-4 search-result">
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
    </div>
  );
}

export default Search;
