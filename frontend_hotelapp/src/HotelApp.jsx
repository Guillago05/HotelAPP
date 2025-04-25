import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListHotelsPage } from "./pages/ListHotelsPage";
import { HotelPage } from "./pages/HotelPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { BookHabitacionPage } from "./pages/BookHabitacionPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import { EditarPerfilPage } from "./pages/EditarPerfilPage";

export const HotelApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/searchresults" element={<ListHotelsPage />} />
            <Route path="/hotel/:nombrehotel" element={<HotelPage />} />
            <Route path="/hotel/:nombrehotel/book" element={<BookHabitacionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/perfil/edit" element={<EditarPerfilPage />} />
        </Routes>
    );
};
