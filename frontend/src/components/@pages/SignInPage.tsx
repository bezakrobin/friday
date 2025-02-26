import React, { useState } from "react";
import backgroundImage from "../../assets/background.jpg";
import { F_AuthImageBox } from "../@auth";
import { F_FormButton, F_FormInputField, F_FormSubtitle, F_FormTitle, F_FormClickableText } from "../@form";
import { F_AuthFormLayout, F_AuthLayout } from "../@layouts";
import {F_Spacing} from "../@core";

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

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <F_AuthLayout
            leftComponent={ <F_AuthImageBox image={backgroundImage as string} /> }
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
                        required={true}
                    />
                    <F_FormInputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required={true}
                    />
                    <F_FormButton
                        label="Submit"
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        fullWidth
                    />
                    <F_Spacing vertical={30} />
                    <F_FormClickableText
                        text={"Forgot your password? Reset it here."}
                        clickableText={"Reset it here."}
                        url={"/forgot-password"}
                    />
                    <F_Spacing vertical={10} />
                    <F_FormClickableText
                        text={"Don't have an account? Sign up now!"}
                        clickableText={"Sign up now!"}
                        url={"/sign-up"}
                    />
                </F_AuthFormLayout>
            }
        />
    );
};