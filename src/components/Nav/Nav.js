import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) => {
    const {
        basePath,
        children,
    } = props;

    const createLinks = () => {
        const subPaths = children;
        return subPaths.map((subPath) => (
            <Link to={`${basePath}/${subPath}`} key={subPath}>
                {subPath}
            </Link>
            )
        );
    }

    return (
        <nav className={styles.nav}>
            {createLinks()}
        </nav>
    );
}

export default Nav;
