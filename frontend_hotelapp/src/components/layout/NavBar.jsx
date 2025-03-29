import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex align-items-center">
                    <h2 className="navbar-brand me-3">
                        <NavLink className="nav-link" to="/home">
                            HotelApp
                        </NavLink>
                    </h2>
                    <div className="navbar-nav d-flex flex-row gap-3">
                        <ul className="navbar-nav d-flex flex-row gap-3 ms-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}