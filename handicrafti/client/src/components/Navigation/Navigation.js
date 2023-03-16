import './Navigation.css';
export const Navigation = () => {

    return (
        <nav className="nav">

            <div className="left-nav-bar">
                <a href="/"> Home</a>
            </div>
            <div className="right-nav-bar">
                <ul>
                    <li><a href="/list">List</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Register">Register</a></li>

                </ul>
            </div>



        </nav>
    );

};