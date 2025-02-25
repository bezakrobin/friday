import React, { useState } from "react";
import { F_AuthLayout } from "../layouts/F_AuthLayout.tsx";
import { F_AuthImageBox } from "../components/F_AuthImageBox.tsx";
import { F_AuthFormLayout } from "../layouts/F_AuthFormLayout.tsx";
import { F_FormTitle } from "../components/F_FormTitle.tsx";
import { F_FormSubtitle } from "../components/F_FormSubtitle.tsx";
import { F_FormInputField } from "../components/F_FormInputField.tsx";

export const SignInPage: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <F_AuthLayout
            leftComponent={ <F_AuthImageBox /> }
            rightComponent={
                <F_AuthFormLayout>
                    <F_FormTitle title="Sign In" />
                    <F_FormSubtitle subtitle="Please enter your credentials to access your account" />
                    <F_FormInputField
                        label="Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <F_FormInputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </F_AuthFormLayout>
            }
        />
    );
};