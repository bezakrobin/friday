import React, { useState } from "react";
import backgroundImage from "../../assets/background.jpg";
import { F_AuthImageBox } from "../@auth";
import {
    F_FormButton,
    F_FormInputField,
    F_FormSubtitle,
    F_FormTitle,
    F_FormClickableText
} from "../@form";
import { F_AuthFormLayout, F_AuthLayout } from "../@layouts";
import { F_Spacing } from "../@core";

export const F_ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        console.log("Sending password reset email to:", email);
        setIsSuccess(true);
    };

    return (
        <F_AuthLayout
            leftComponent={<F_AuthImageBox image={backgroundImage as string} />}
            rightComponent={
                <F_AuthFormLayout>
                    <F_FormTitle title="Forgot Password" />
                    <F_FormSubtitle subtitle="Enter your email to receive a password reset link" />
                    <F_FormInputField
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <F_FormButton
                        label="Send Reset Link"
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        fullWidth
                    />
                    <F_Spacing vertical={30} />
                    <F_FormClickableText
                        text={"Remember your password?"}
                        clickableText={"Sign in here."}
                        url={"/sign-in"}
                    />
                </F_AuthFormLayout>
            }
        />
    );
};
