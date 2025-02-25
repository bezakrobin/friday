import React from "react";
import { F_SignInLayout } from "../layouts/F_SignInLayout.tsx";

export const SignInPage: React.FC = () => {
    return (
        <F_SignInLayout leftComponent={ <h1>Hello</h1> } rightComponent={ <h1>Hi</h1> } />
    );
};