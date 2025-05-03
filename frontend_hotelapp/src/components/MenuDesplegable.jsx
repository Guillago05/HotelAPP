import { NavLink } from "react-router-dom"
import Swal from "sweetalert2";
import { eliminarCuentaUsuario } from "../services/UsuarioService";

export const MenuDesplegable = ({ handlerLogout, setShowMenu, email }) => {

    const handleDelete = () => {
        Swal.fire({
            title: "¿Estás seguro de eliminar tu cuenta?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Seguro",
            denyButtonText: `Mejor no`,
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarCuentaUsuario(email);
                handlerLogout();
                Swal.fire("Se eliminó tu cuenta", "", "success");
            }
        });
    }
    return (
        <>
            <div
                className="dropdown-menu show p-2 shadow-sm" // 'show' lo hace visible, p-2 para padding, shadow-sm opcional
                style={{
                    position: "absolute", // Posición absoluta relativa al div padre
                    top: "100%",        // Justo debajo del div padre (que contiene el icono)
                    right: 0,           // Alineado a la derecha del div padre
                    marginTop: "0.5rem", // Pequeño espacio entre el icono y el menú
                    zIndex: 1000,       // Asegura que esté por encima de otros elementos
                    minWidth: '160px'   // Ancho mínimo para que se vea bien
                }}
            >
                <NavLink
                    className="dropdown-item"
                    to="/perfil/edit"
                    onClick={() => setShowMenu(false)} // Cierra el menú al hacer clic
                >
                    Modificar datos
                </NavLink>
                <NavLink
                    className="dropdown-item"
                    to="/reservas"
                    onClick={() => setShowMenu(false)} // Cierra el menú al hacer clic
                >
                    Ver reservas
                </NavLink>
                <button
                    className="dropdown-item"
                    onClick={() => handleDelete()} // Cierra el menú al hacer clic
                >
                    Eliminar cuenta
                </button>
                <hr className="dropdown-divider" /> {/* El divisor se mantiene */}
                <button
                    className="dropdown-item text-danger" // Se mantiene como botón
                    onClick={handlerLogout}
                >
                    Logout
                </button>
            </div>
        </>
    )
}