import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import Body from './Body';
import "./Body.css";
import Footer from "./Footer.js";

function Player({spotify}) {
  return (
    <div className="player">
        <div className="player__body">
            <Sidebar />
            <Body spotify={spotify} />
        </div>
    <Footer />
    </div>
  )
}

export default Player;