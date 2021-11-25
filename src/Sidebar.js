import React, { useState, useStateValue } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar({ spotify }) {
  const [{ activesong, discover_weekly, playlists }, dispatch] =
    useDataLayerValue();

  const setPlaylistsongs = (listID) => {
    spotify.getPlaylist(listID).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };

  const playondoubleclick = (listID) => {
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
    spotify.getPlaylist(listID).then((response) => {
      dispatch({
        type: "SET_ACTIVE_SONG",
        activesong: response?.tracks.items[0].track,
      });

      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };

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
      <hr />
      <p className="thanks"> Double click on a song to play it</p>
      <p className="thanks"> Double click on a playlist to play it</p>
      <p className="thanks"> Click on a playlist to select it</p>
      <hr />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/*list all the available playlists*/}

      {playlists?.items?.map((list) => (
        <div
          onClick={() => setPlaylistsongs(list.id)}
          onDoubleClick={() => playondoubleclick(list.id)}
        >
          <SidebarOption title={list.name} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
