import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ListHotelsPage } from "./pages/ListHotelsPage";
import { HotelPage } from "./pages/HotelPage";

export const HotelApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/searchresults" element={<ListHotelsPage />} />
            <Route path="/hotel/:id" element={<HotelPage />} />
            <Route path="/registro" element={<LoginPage />} />
        </Routes>
    );
};
