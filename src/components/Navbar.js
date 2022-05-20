import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsPortal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <Link className="nav-link" to="/business"> Business</Link>
                        <Link className="nav-link" to="/entertainment"> Entertainment</Link>
                        <Link className="nav-link" to="/"> General</Link>
                        <Link className="nav-link" to="/health"> Health</Link>
                        <Link className="nav-link" to="/science"> Science</Link>
                        <Link className="nav-link" to="/sports"> Sports</Link>
                        <Link className="nav-link" to="/technology"> Technology </Link>
                    </ul>
                    <i className={`${props.icon} fw-bolder fs-1 me-4 text-white`} onClick={props.backgroundMode}></i>
                </div>

            </div>
        </nav>
    )
}
