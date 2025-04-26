import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { useEffect, useState } from "react";
import { MenuDesplegable } from "../MenuDesplegable";
import { getUsuarioPorCorreo } from "../../services/UsuarioService";

export const NavBar = () => {
    const { handlerLogout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const [puntos, setPuntos] = useState(0);
    const loginData = JSON.parse(sessionStorage.getItem("login")) || { isAuth: false, isUser: false, email: "" };

    const toggleMenu = () => setShowMenu(!showMenu);

    const obtener_puntos = async () => {
        const usuario = await getUsuarioPorCorreo(loginData.email);
        setPuntos(usuario.puntos);
    }

    useEffect(() => {
        obtener_puntos()
    }, []);
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
                        // Usamos Fragment (<>) porque ahora tenemos dos elementos hermanos (span y div)
                        <>
                            {/* Span de Puntos - Hijo directo del contenedor flex */}
                            <span className="text-white me-2" title="Your points"> {/* Añadido me-2 para un pequeño margen extra si gap-3 no es suficiente */}
                                Puntos: {puntos} {/* Asegúrate de que 'puntos' sea loginData.points */}
                            </span>

                            {/* Contenedor para Icono y Menú (position: relative para el menú desplegable) */}
                            {/* Este es el segundo hijo directo del contenedor flex */}
                            <div style={{ position: "relative" }}>
                                {/* Icono */}
                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        fontSize: "1.2rem",
                                        cursor: "pointer",
                                    }}
                                    onClick={toggleMenu}
                                    title={`Logged in as: ${loginData.email}`}
                                >
                                    {String(loginData.email || "?").charAt(0).toUpperCase()}
                                </div>
                                {/* Menú Desplegable */}
                                {showMenu && (
                                    <MenuDesplegable
                                        handlerLogout={handlerLogout}
                                        setShowMenu={setShowMenu}
                                        email={loginData.email}
                                    />
                                )}
                            </div>
                        </>
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