import React from 'react';
import "./Footer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__left">
          <div className="footer__albumImage">
            <img src="https://pbs.twimg.com/media/E9-PUzWWYAoAjVF.jpg" alt="" />
          </div>
          <div className="footer__songInfo">
              <h4>Stressed Out</h4>
              <p>Twenty One Pilots</p>
          </div>
        </div>

        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>

        <div className="footer__right">
              <PlaylistPlayIcon />
              <VolumeDownIcon />
              <VolumeUpIcon />
        </div>
    </div>
  )
}
