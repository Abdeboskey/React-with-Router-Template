import { Link, Outlet } from 'react-router-dom';
import styles from 'style/Nav.module.css';

const MusicLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/music">/bio</Link>
        <Link to="/music/gigs">/gigs</Link>
        <Link to="/music/recordings">/recordings</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default MusicLayout;
