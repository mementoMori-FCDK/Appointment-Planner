import React from "react";
import Tile from '../../components/tile/Tile';

const TileList = (props) => {
  const tiles = props.tiles;

  return (
    <div>
      {tiles.map((tile, index) => {
        return <Tile key={index} component={tile} />
      })}
    </div>
  );
};

export default TileList;
