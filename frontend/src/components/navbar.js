import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container px-2">
                    <div className="row">
                        <div className="col">
                            <ul className="navbar-nav">
                                <li className={props.page === 'home' ? 'nav-item active' : 'nav-item'}><Link className="nav-link" to="/">Home</Link></li>
                                <li className={props.page === 'model' ? 'nav-item active' : 'nav-item'}><Link className="nav-link" to="/model">Model</Link></li>
                                <li className={props.page === 'result' ? 'nav-item active' : 'nav-item'}><Link className="nav-link" to="/result">Result</Link></li>
                                <li className={props.page === 'about' ? 'nav-item active' : 'nav-item'}><Link className="nav-link" to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
