import coneAndGrid from 'assets/coneAndGrid.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={coneAndGrid} alt="Pattern of pinecone overlayed on a progressively shrinking grid"/>
    </footer>
  )
}

export default Footer;
