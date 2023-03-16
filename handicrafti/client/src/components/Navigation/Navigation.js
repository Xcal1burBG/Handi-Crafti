import './Navigation.css';
import {Link} from 'react-router-dom';
export const Navigation = () => {

    return (
        <nav className="nav">

            <div className="left-nav-bar">
                <a href="/"> Home</a>
            </div>
            <div className="right-nav-bar">
                <ul>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>

                </ul>
            </div>

        </nav>
    );

};