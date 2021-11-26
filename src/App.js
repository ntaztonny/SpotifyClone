import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    console.log("token ", _token);
    window.location.hash = "";
    if (_token) {
      //Conect spotify to react
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        console.log("MyplayLists", playlists);

        let playListID =
          playlists.total !== 0
            ? playlists.items[1].id
            : "37i9dQZF1DX2sJGkrvCPgm";
        console.log("myListID", playListID);
        console.log("myListID type", typeof playListID);
        //get and set the first playlist
        spotify.getPlaylist("0pEhLrGaEc3tyiXYk3gTnv").then((response) => {
          //spotify.getPlaylist(availableListID).then((response) => {
          console.log("playlistTitle", response);
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotity={spotify} /> : <Login />}
    </div>
  );
}

export default App;
