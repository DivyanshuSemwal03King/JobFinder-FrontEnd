import { Link } from "react-router-dom";
function Nav(){
    return (<>
        <nav className="navbar">
            <div className="logo">Local Job Finder</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <button className="register"><Link to="/register">Register</Link></button>
            </ul>
        </nav>
    </>);
}
export default Nav;