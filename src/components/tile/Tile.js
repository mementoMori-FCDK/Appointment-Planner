import React from "react";

const Tile = (props) => {
  const component = props.component;

  return (
    <div className="tile-container">
      {Object.values(component).map((value, index) => {
        if (index === 0) return <p key={index} className='tile-title'>{value}</p>;
        else return <p key={index} className='tile'>{value}</p>;
      })}
    </div>
  );
};

export default Tile;
