import React, { useState, useStateValue } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/*list all the available playlists*/}

      {playlists?.items?.map((list) => (
        <SidebarOption title={list.name} />
      ))}
    </div>
  );
}

export default Sidebar;
