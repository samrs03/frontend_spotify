import React from "react";
const FirstChildFunctionalComponent = (props) => {
  let newFlag = props.flag;
  if (newFlag === 'true') {
    const newDocs = props.response.map((element,index) => (
        <li className="list-group-item mx-auto w-75 d-flex flex-row">
          <div className="container">
            <img
              src={element.album.images[1].url}
              title={element.name}
              width='150'
              height='150'
              alt=""
              allowtransparency="true"
              allow="encrypted-media"
              className="ml-5"
            ></img>
          </div>

          <div className=" d-flex flex-column mr-5 w-100">
            <h4 className="text-center mt-5">{element.name}</h4>
            <h4 className="text-center ">{element.artists[0].name}</h4>
            <h4 className="text-center mb-5">{element.album.name}</h4>
          </div>
          <div className="d-flex">
            <input
              type="submit"
              value="See Details"
              className="btn btn-outline-primary align-middle h-25 m-5"
              height="250"
              onClick={(e)=>{e.preventDefault();console.log(index)}}
            ></input>
          </div>
        </li>
      ));
      return (
        <div className="container mx-auto">
          <ul className="list-group mx-auto">{newDocs}</ul>
        </div>
      );
  } else {
    return null;
  }
};
export default FirstChildFunctionalComponent;
