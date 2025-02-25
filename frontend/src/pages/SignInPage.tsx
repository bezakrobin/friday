import React from "react";
import { F_AuthLayout } from "../layouts/F_AuthLayout.tsx";
import { F_AuthImageBox } from "../components/F_AuthImageBox.tsx";


export const SignInPage: React.FC = () => {
    return (
        <F_AuthLayout leftComponent={ <F_AuthImageBox /> } rightComponent={ <h1>Hi</h1> } />
    );
};