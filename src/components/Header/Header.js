import { Link } from 'react-router-dom';
// import Nav from 'components/Nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
