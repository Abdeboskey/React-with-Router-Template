import { Link, Outlet } from 'react-router-dom';
import styles from 'style/Nav.module.css';

const SoftwareLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/software">/mission</Link>
        <Link to="/software/background">/background</Link>
        <Link to="/software/portfolio">/portfolio</Link>
        <Link to="/software/stack">/stack</Link>
        <Link to="/software/resume">/resume</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default SoftwareLayout;
