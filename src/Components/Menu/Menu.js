import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="bg-light">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="#">Book List</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/add-book">Add Book</Link>
                        </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Menu;