import React from "react";
import { F_AuthLayout } from "../layouts/F_AuthLayout.tsx";
import { F_AuthImageBox } from "../components/F_AuthImageBox.tsx";
import {F_AuthFormLayout} from "../layouts/F_AuthFormLayout.tsx";



export const SignInPage: React.FC = () => {
    return (
        <F_AuthLayout
            leftComponent={ <F_AuthImageBox /> }
            rightComponent={
                <F_AuthFormLayout>
                    <h1>Hello</h1>
                </F_AuthFormLayout>
            }
        />
    );
};