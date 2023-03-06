import { NavLink, Outlet } from 'react-router-dom';
import 'style/Nav.css';

const MusicLayout = () => {
  return (
    <>
      <nav>
        <NavLink end to="/music">/bio</NavLink>
        <NavLink to="/music/gigs">/gigs</NavLink>
        <NavLink to="/music/recordings">/recordings</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default MusicLayout;
