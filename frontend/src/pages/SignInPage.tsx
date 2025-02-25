import React from "react";
import { F_AuthLayout } from "../layouts/F_AuthLayout.tsx";
import { F_AuthImageBox } from "../components/F_AuthImageBox.tsx";
import { F_AuthFormLayout } from "../layouts/F_AuthFormLayout.tsx";
import { F_FormTitle } from "../components/F_FormTitle.tsx";
import { F_FormSubtitle } from "../components/F_FormSubtitle.tsx";
import { F_FormInputLabel } from "../components/F_FormInputLabel.tsx";



export const SignInPage: React.FC = () => {
    return (
        <F_AuthLayout
            leftComponent={ <F_AuthImageBox /> }
            rightComponent={
                <F_AuthFormLayout>
                    <F_FormTitle title="Sign In" />
                    <F_FormSubtitle subtitle="Please enter your credentials to access your account" />
                    <F_FormInputLabel label="Username" />
                    <F_FormInputLabel label="Password" />
                </F_AuthFormLayout>
            }
        />
    );
};