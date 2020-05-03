import React, { useState, useEffect } from "react";
import axios from "axios";
import GymInfo from "../gymInfo";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import "./search.scss";

const solrQueryUrl = "http://localhost:8983/solr/flexfyt_core/select?q=";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 500,
  });

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelect = ({
    description,
    structured_formatting: { main_text },
  }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    setQuery(main_text);

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

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
    <div className="search-container container d-flex flex-column">
      <div className="search-bar d-flex justify-content-center">
        <div className="search-bar d-flex flex-column">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            disabled={!ready}
            placeholder="Enter a city name"
          />
          <div>
            {status === "OK" && (
              <ul className="suggestion-list">{renderSuggestions()}</ul>
            )}
          </div>
        </div>
      </div>
      <div className="search-result-container d-flex justify-content-center">
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
