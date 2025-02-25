import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { SignInPage } from "../components/@pages";

export const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={ <Navigate to={"/sign-in"} /> } />
                <Route path={"/sign-in"} element={<SignInPage />} />
            </Routes>
        </Router>
    );
};