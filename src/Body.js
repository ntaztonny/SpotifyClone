import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, playing, activesong }, dispatch] =
    useDataLayerValue();
  const setactivesong = (track) => {
    dispatch({
      type: "SET_ACTIVE_SONG",
      activesong: track,
    });

    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
    //console.log(activesong);
  };
  const playpausesong = () => {
    console.log("my active list: ", discover_weekly);

    if (!{ activesong }) {
      {
        dispatch({ activesong: discover_weekly?.tracks.items[0].track });
      }
    }
    console.log("my active song: ", activesong);
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
    //console.log(activesong);
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
          <p>
            {" "}
            {discover_weekly?.followers.total} <strong>Likes:</strong>,{" "}
            {discover_weekly?.tracks.total} <strong>songs</strong>
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="playing__songs">
          <div className="body__icons">
            <div className="body__icons__icons">
              {playing ? (
                <PauseCircleFilledIcon
                  onClick={playpausesong}
                  className="body__shuffle"
                />
              ) : (
                <PlayCircleFilledIcon
                  onClick={playpausesong}
                  className="body__shuffle"
                />
              )}
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
            <div className="body__icons__album">
              <h4>ALBUM</h4>
            </div>
          </div>
          <hr className="body__icon__separator" />

          {discover_weekly?.tracks.items.map((item) => (
            <div onDoubleClick={() => setactivesong(item.track)}>
              <SongRow track={item.track} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
