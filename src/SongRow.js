import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <div className="songRow__info__left">
          <h1>{track.name}</h1>
          <p>
            {/* {track.artists.map((artist) => artist.name).join(",")} -{" "}
          {track.album.name} */}
            {track.artists.map((artist) => artist.name)}
          </p>
        </div>
        <div className="songRow__albumname">
          {track.artists.map((artist) => track.album.name)}
        </div>
      </div>
    </div>
  );
}

export default SongRow;
