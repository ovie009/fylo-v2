import '../css/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className="fylo_logo">
                <img src={logo} alt="fylo logo" />
            </div>
            <ul className="nav_list">
                <li className="nav_item">
                    Features
                </li>
                <li className="nav_item">
                    Team
                </li>
                <li className="nav_item">
                    Sign In
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;