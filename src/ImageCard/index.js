import React from "react";
// 
// import "./style.css";

function ImageCard(props) {
  return (
    // <div className="card">
      <div className="img-container float-left"> 
      {/*  */}
        <img onClick={()=>props.clickImg(props.id)} src={props.image} alt={props.name} className="img-thumbnail"></img>
      </div>
    // </div>
  );
}

export default ImageCard;