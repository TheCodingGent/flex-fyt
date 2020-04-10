import React, { Component } from "react";
import axios from "axios";
import GymInfo from "./gymInfo";

class Search extends Component {
  state = {
    query: "",
    result: null,
  };

  fetchData = () => {
    if (this.state.query === "") {
      axios
        .get("http://localhost:8983/solr/flexfyt_core/select?q=*:*")
        .then((response) =>
          this.setState({ result: response.data.response.docs })
        );
    } else {
      axios
        .get(
          encodeURI(
            "http://localhost:8983/solr/flexfyt_core/select?q=city:" +
              this.state.query +
              "~2"
          )
        )
        .then((response) =>
          this.setState({ result: response.data.response.docs })
        );
    }
  };

  // console.log(response.data.response.docs)

  renderGyms() {
    if (this.state.result === null || this.state.result.length === 0)
      return <p>There are no gyms to display!</p>;

    return (
      <div>
        {this.state.result.map((gym) => (
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
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter city name"
          type="text"
          onChange={(event) => this.setState({ query: event.target.value })}
        />
        <button type="button" onClick={this.fetchData}>
          Search
        </button>
        {/* <MapContainer /> */}
        <div>{this.renderGyms()}</div>
      </div>
    );
  }
}

export default Search;
