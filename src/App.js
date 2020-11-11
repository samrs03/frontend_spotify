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
      const completeURL = `${URL}limit=${limit}&offset=${offset}&q=${query}`;
      axios
        .get(completeURL)
        .then((result) => {
          setResponseJSON(result.data.tracks.items);
          setFlag("true");
        })
        .catch((error) => {
          return console.error(error);
        });
    }
  };
  if (flag === "false") {
    return (
      <div>
        <div className="container mt-3 mx-auto w-75">
          <h1 className="text-center text-dark">
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
                className="btn btn-outline-dark"
                value="Search"
              />
            </div>
          </div>
        </form>
        <FirstChildFunctionalComponent response={responseJSON} flag={flag} />
      </div>
    );
  } else {
    return (
      <div className="container m-5 mx-auto bg rounded w-7">
        <div className="container mx-auto d-flex justify-content-around mb-3">
          <button
            className="btn btn-outline-dark "
            onClick={(e) => {
              e.preventDefault();
              setFlag("false");
            }}
          >
            Back To Search Songs
          </button>
        </div>

        <FirstChildFunctionalComponent response={responseJSON} flag={flag} />
        <div className="container d-flex justify-content-around mt-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="btn btn-outline-dark"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    substractingToOffset();
                  }}
                >
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  className="btn btn-outline-dark"
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
}

export default App;
