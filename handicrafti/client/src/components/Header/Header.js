import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {

    return (
        <header>
            <Link to="/" className="site-title">Handi-Crafti</Link>
            <nav>
                <ul>
                    <li><Link to="offers/catalog">Catalog</Link></li>
                    <li><Link to="offers/create">Create offer</Link></li>
                    <li><Link to="offers/myoffers">My offers</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>

            </nav>
        </header>
    );

};