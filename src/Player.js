import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotity }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotity} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
