import React from "react";
const GrandChildComponent = (props) => {
  let minutes = Math.trunc(
    props.informationToDisplay.duration_ms / (1000 * 60)
  );

  let seconds = Math.trunc(
    ((props.informationToDisplay.duration_ms / (1000 * 60)) % 1) * 60
  );

  return (
    <>
      <div className="col- rounded list-group-item d-flex justify-content-around">
        <div className="d-flex flex-column">
          <iframe
            src={`https://open.spotify.com/embed/track/${props.informationToDisplay.id}`}
            height="300"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <div className='m-3'>
            <p className="text-center text-dark m-0">
              Name: {props.informationToDisplay.name}
            </p>
            <p className="text-center text-dark m-0">
              Album: {props.informationToDisplay.album.name}
            </p>
            <p className="text-center text-dark m-0">
              Artist: {props.informationToDisplay.artists[0].name}
            </p>
            <p className="text-center text-dark m-0">
              Duration: {minutes}:{seconds}
            </p>
            <p className="text-center text-dark m-0">
              Popularity: {props.informationToDisplay.popularity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GrandChildComponent;
