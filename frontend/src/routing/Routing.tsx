import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { F_SignInPage, F_SignUpPage } from "../components/@pages";

export const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={ <Navigate to={"/sign-in"} /> } />
                <Route path={"/sign-in"} element={<F_SignInPage />} />
                <Route path={"/sign-up"} element={<F_SignUpPage />} />
            </Routes>
        </Router>
    );
};