import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
    F_2FA_EmailPage,
    F_2FA_GoogleAuthenticatorPage,
    F_ForgotPasswordPage,
    F_SignInPage, F_SignUpPage
} from "../components/@pages";

export const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={ <Navigate to={"/sign-in"} /> } />
                <Route path={"/sign-in"} element={<F_SignInPage />} />
                <Route path={"/sign-up"} element={<F_SignUpPage />} />
                <Route path={"/forgot-password"} element={<F_ForgotPasswordPage />} />
                <Route path={"/2fa/email"} element={<F_2FA_EmailPage />} />
                <Route path={"/2fa/google-authenticator"} element={<F_2FA_GoogleAuthenticatorPage />} />
            </Routes>
        </Router>
    );
};