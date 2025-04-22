import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const NavBar = () => {
    const { handlerLogout } = useAuth();
    const loginData = JSON.parse(sessionStorage.getItem("login")) || { isAuth: false, isUser: false, email: "" };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex align-items-center">
                <h2 className="navbar-brand me-3">
                    <NavLink className="nav-link" to="/home">
                        HotelApp
                    </NavLink>
                </h2>

                <div className="ms-auto d-flex align-items-center gap-3">
                    {loginData.isAuth ? (
                        <>
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}>
                                {String(loginData.email).charAt(0).toUpperCase() || "?"}
                            </div>
                            <button className="btn btn-outline-light" onClick={() => {
                                sessionStorage.removeItem("login");
                                handlerLogout();
                            }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink className="btn btn-outline-light" to="/login">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};
