import React, { useState, useStateValue } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const spotify = new SpotifyWebApi();
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setPlaylistsongs = (listID) => {
    spotify.getPlaylist(listID).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };
  console.log("playlists", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <p className="thanks">
        Thanks for checking out Tonny's spotify version aka: spotify clone
      </p>
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/*list all the available playlists*/}

      {playlists?.items?.map((list) => (
        <div onClick={() => setPlaylistsongs(list.id)}>
          <SidebarOption title={list.name} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
