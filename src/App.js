import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FirstChildFunctionalComponent from "./components/firstChild";

function App() {
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [responseJSON, setResponseJSON] = useState({});
  const [flag, setFlag] = useState("false");
  
  const URL = "http://localhost:3010/tracks?";
  const limit = 10;
  const addingToOffset = () => {
    if (offset + 10 <= 100) {
      let addingTo = offset;
      setOffset((addingTo += 10));
    }
  };
  const substractingToOffset = () => {
    if (offset - 10 >= 0) {
      let substractToOffset = offset;
      setOffset((substractToOffset -= 10));
    }
  };
  useEffect(() => {
    makingRequest();
  }, [offset]);

  const makingRequest = () => {
    if (query.length > 0) {
      // setOffset(0);
      const completeURL = `${URL}limit=${limit}&offset=${offset}&q=${query}`;
      console.log(completeURL);
      axios
        .get(completeURL)
        .then((result) => {
          console.log(result.data.tracks.items);
          setResponseJSON(result.data.tracks.items);
          setFlag("true");
        })
        .catch((error) => {
          return console.error(error);
        });
    }
  };
  return (
    <div>
      <div className="container m-5 mx-auto bg-primary rounded w-75">
        <h1 className="text-center text-light">
          Welcome to Spotify Song Search Project
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOffset(0);
          makingRequest();
        }}
      >
        <div className="input-group m-5 mx-auto w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Type Song To Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="input-group-append">
            <input
              type="Submit"
              className="btn btn-outline-primary"
              value="Search"
            />
          </div>
        </div>
      </form>
      <FirstChildFunctionalComponent response={responseJSON} flag={flag} />
      <div className="container d-flex justify-content-around mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  substractingToOffset();
                }}
              >
                Previous
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  addingToOffset();
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
