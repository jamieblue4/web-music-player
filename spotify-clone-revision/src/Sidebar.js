import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
    <br />
    <strong className="sidebar__title">Playlists</strong>
    <hr />

    {playlists?.items?.map(playlist => (
      <SidebarOption title={playlist.name} />
    ))}
    <SidebarOption title="Rock" />
    <SidebarOption title="Hip Hop" />
    <SidebarOption title="Indie" />
    <SidebarOption title="Lo-Fi" />

    </div>
  );
}

export default Sidebar;