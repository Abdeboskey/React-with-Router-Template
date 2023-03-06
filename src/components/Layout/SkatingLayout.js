import { NavLink, Outlet } from 'react-router-dom';
import 'style/Nav.css';

const SkatingLayout = () => {
  return (
    <>
      <nav>
        <NavLink end to="/skating">/origins</NavLink>
        <NavLink to="/skating/skates">/skates</NavLink>
        <NavLink to="/skating/teaching">/teaching</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default SkatingLayout;
