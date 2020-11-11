import React from "react";
import { useState, useEffect } from "react";
import GrandChildComponent from "./grandChildComponent";
const FirstChildFunctionalComponent = (props) => {
  const [newFlag, setNewFlag] = useState(props.flag);
  const [informationToPass, setInformationToPass] = useState("");
  useEffect(() => {}, [newFlag, informationToPass]);
  if (newFlag === "true") {
    const newDocs = props.response.map((element, index) => (
      <li className="list-group-item d-flex justify-content-around" key={index}>
        <div className="d-flex flex-column justify-content-around">
          <div className="m-0 p-0 d-flex justify-content-around">
            <img
              src={element.album.images[1].url}
              title={element.name}
              width="150"
              height="150"
              alt=""
              allowtransparency="true"
              allow="encrypted-media"
              className="m-0 p-0 overflow-hidden"
            ></img>
          </div>

          <div className="mt-3 p-0">
            <p className="text-center m-0 p-0 text-dark ">{element.name}</p>
            <p className="text-center m-0 p-0 text-dark">
              {element.artists[0].name}
            </p>
            <p className="text-center m-0 p-0 text-dark">
              {element.album.name}
            </p>
          </div>

          <div className="mt-3 p-0 d-flex justify-content-around">
            <input
              className="btn btn-outline-dark"
              type="submit"
              value="See Details"
              name={index}
              height="250"
              onClick={(e) => {
                e.preventDefault();
                setNewFlag("false");
                setInformationToPass(props.response[index]);
              }}
            ></input>
          </div>
        </div>
      </li>
    ));
    return (
      <>
        <ul className="col- list-group">{newDocs}</ul>
      </>
    );
  }
  if (newFlag === "false" && informationToPass !== "") {
    return (
      <>
        <div className="col- d-flex justify-content-around mb-3">
          <button
            className="btn btn-outline-dark "
            onClick={(e) => {
              e.preventDefault();
              setNewFlag("true");
            }}
          >
            Go Back To Results
          </button>
        </div>
        <GrandChildComponent
          thirdFlag={false}
          informationToDisplay={informationToPass}
        ></GrandChildComponent>
      </>
    );
  }
  return null;
};
export default FirstChildFunctionalComponent;
