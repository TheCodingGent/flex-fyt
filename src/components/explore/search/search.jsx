import React, { useState, useEffect } from "react";
import axios from "axios";
import GymInfo from "../gymInfo";

const solrQueryUrl = "http://localhost:8983/solr/flexfyt_core/select?q=";

function Search() {
  const [query, setQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [gyms, setGyms] = useState(<p>There are no gyms to display!</p>);

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

  useEffect(() => {
    setGyms(
      <div>
        {result.map((gym) => (
          <GymInfo
            key={gym.id}
            name={gym.name}
            address={gym.address}
            location={gym.location}
            services={gym.services}
            image={gym["image-url"]}
            city={gym.city}
          />
        ))}
      </div>
    );
  }, [result]);

  return (
    <div>
      <input
        placeholder="Enter city name"
        type="text"
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button type="button" onClick={() => setQuery(userInput)}>
        Search
      </button>
      <div>{gyms}</div>
    </div>
  );
}

export default Search;
