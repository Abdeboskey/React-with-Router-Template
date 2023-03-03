import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import navStyles from 'style/Nav.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={navStyles.nav}>
        <Link to="/" >/home</Link>
        <Link to="/software">/software</Link>
        <Link to="/music">/music</Link>
        <Link to="/skating">/skating</Link>
      </nav>
      <div className={styles.border}/>
    </header>
  )
} 

export default Header;
