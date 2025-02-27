import React, { useState } from "react";
import backgroundImage from "../../assets/background.jpg";
import { F_AuthImageBox } from "../@auth";
import {
    F_FormButton,
    F_FormInputField,
    F_FormSubtitle,
    F_FormTitle,
    F_FormClickableText,
    F_FormPasswordStrength,
    F_FormCheckbox
} from "../@form";
import { F_AuthFormLayout, F_AuthLayout } from "../@layouts";
import { F_Spacing } from "../@core";

export const F_SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <F_AuthLayout
            leftComponent={<F_AuthImageBox image={backgroundImage as string} />}
            rightComponent={
                <F_AuthFormLayout>
                    <F_FormTitle title="Sign Up" />
                    <F_FormSubtitle subtitle="Create an account to get started" />
                    <F_FormInputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <F_FormInputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <F_FormPasswordStrength password={formData.password} />
                    <F_FormInputField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <F_FormCheckbox
                        label="I accept the terms and conditions"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        required
                    />

                    <F_Spacing vertical={20} />
                    <F_FormButton
                        label="Sign Up"
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        fullWidth
                    />
                    <F_Spacing vertical={30} />
                    <F_FormClickableText
                        text={"Already have an account? Sign in here."}
                        clickableText={"Sign in here."}
                        url={"/sign-in"}
                    />
                </F_AuthFormLayout>
            }
        />
    );
};