import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/software">Software</Link>
        <Link to="/music">Music</Link>
        <Link to="/skating">Skating</Link>
      </nav>
      <div className={styles.border}/>
    </header>
  )
} 

export default Header;
