import { Outlet, Link } from "react-router-dom";
import './navbar.css'
const NavBar = () =>{
    return(
        <>
        <header className="header">
            <nav className="nav container">
            <Link to="/" className="nav_logo">
                INKPROG
            </Link>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link to="/" className="nav_link">Home</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/training" className="nav_link">Training</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/contact" className="nav_link">Contact</Link>
                    </li>
                </ul>
            </div> 
        </nav>
        </header>
      

      <Outlet />
    </>
    )
}

export default NavBar;