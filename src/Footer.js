import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
  const [{ activesong, token, playing }, dispatch] = useDataLayerValue();

  const playpausesong = () => {
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
    //console.log(activesong);
  };

  useEffect(() => {});

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={activesong?.album.images[0].url}
          alt=""
        />
        {activesong ? (
          <div className="footer__songInfo">
            {/* <h4>No song is playing</h4>
          <p>Artist Name</p> */}

            <h5>{activesong?.name}</h5>
            <p>
              {<strong>Artist</strong>}
              {": "}
              {activesong?.artists[0].name}
            </p>
            <p>
              {<strong>Album</strong>}
              {": "}
              {activesong?.album.name}
            </p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>....</p>
          </div>
        )}
      </div>
      <div className="footer__middle">
        <ShuffleIcon fontSize="small" className="footer__green" />
        <SkipPreviousIcon fontSize="medium" className="footer__icon" />
        {!playing ? (
          <PlayCircleOutlineIcon
            onClick={playpausesong}
            fontSize="large"
            className="footer__icon__play"
          />
        ) : (
          <PauseCircleOutlineIcon
            onClick={playpausesong}
            fontSize="large"
            className="footer__icon__play"
          />
        )}
        <SkipNextIcon fontSize="medium" className="footer__icon" />
        <RepeatIcon fontSize="small" className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon value="0.5" />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continueous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
