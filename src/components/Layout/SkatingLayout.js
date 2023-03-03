import { Link, Outlet } from 'react-router-dom';
import styles from 'style/Nav.module.css';

const SkatingLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/skating">/bio</Link>
        <Link to="/skating/PRs">/PRs</Link>
        <Link to="/skating/teaching">/teaching</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default SkatingLayout;
