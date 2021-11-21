import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="" alt="" />
        <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="footer__middle">
        <ShuffleIcon fontSize="small" className="footer__green" />
        <SkipPreviousIcon fontSize="medium" className="footer__icon" />
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon__play"
        />
        <SkipNextIcon fontSize="medium" className="footer__icon" />
        <RepeatIcon fontSize="small" className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
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
