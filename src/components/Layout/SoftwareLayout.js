import { NavLink, Outlet } from 'react-router-dom';
import 'style/Nav.css';

const SoftwareLayout = () => {
  return (
    <>
      <nav> 
        <NavLink end to="/software">/mission</NavLink>
        <NavLink to="/software/background">/background</NavLink>
        <NavLink to="/software/portfolio">/portfolio</NavLink>
        <NavLink to="/software/stack">/stack</NavLink>
        <NavLink to="/software/resume">/resume</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default SoftwareLayout;
