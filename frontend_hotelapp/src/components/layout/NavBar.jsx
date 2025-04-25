import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { useState } from "react";
import { MenuDesplegable } from "../MenuDesplegable";

export const NavBar = () => {
    const { handlerLogout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const loginData = JSON.parse(sessionStorage.getItem("login")) || { isAuth: false, isUser: false, email: "" };

    const toggleMenu = () => setShowMenu(!showMenu);

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
                        // Contenedor relativo para el icono y el menú
                        <div style={{ position: "relative" }}>
                            {/* Icono del usuario */}
                            <div
                                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    fontSize: "1.2rem",
                                    cursor: "pointer",
                                }}
                                onClick={toggleMenu}
                                title={loginData.email}
                            >
                                {String(loginData.email).charAt(0).toUpperCase() || "?"}
                            </div>
                            {showMenu && (
                                <MenuDesplegable handlerLogout={handlerLogout} setShowMenu={setShowMenu}
                                    email={loginData.email} />
                            )}
                        </div>
                    ) : (
                        // Botón de Login si no está autenticado
                        <NavLink className="btn btn-outline-light" to="/login">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};