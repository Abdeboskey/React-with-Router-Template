import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import 'style/Nav.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink end to="/" >/home</NavLink>
        <NavLink to="/software">/software</NavLink>
        <NavLink to="/music">/music</NavLink>
        <NavLink to="/skating">/skating</NavLink>
      </nav>
      <div className={styles.border}/>
    </header>
  )
} 

export default Header;
