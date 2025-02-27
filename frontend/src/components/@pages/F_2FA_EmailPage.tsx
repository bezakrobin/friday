import React, { useState, useEffect } from "react";
import { F_AuthImageBox } from "../@auth";
import backgroundImage from "../../assets/background.jpg";
import {
    F_FormButton,
    F_FormSubtitle,
    F_FormTitle,
    F_FormClickableText,
    F_FormSixDigitCodeInputField
} from "../@form";
import { F_AuthFormLayout, F_AuthLayout } from "../@layouts";
import { F_Spacing } from "../@core";

export const F_2FA_EmailPage: React.FC = () => {
    const [code, setCode] = useState("");

    const handleChange = (newValue: string) => {
        setCode(newValue);
    };

    const handleSubmit = () => {
        if (code.length === 6) {
            console.log("Submitting code:", code);
        } else {
            console.log("Couldn't submit the code");
        }
    };

    useEffect(() => {
        if (code.length === 6) {
            const submitButton = document.getElementById("2fa-email-submit-button");
            if (submitButton) {
                (submitButton as HTMLElement).focus();
            }
        }
    }, [code]);

    return (
        <F_AuthLayout
            leftComponent={<F_AuthImageBox image={backgroundImage as string} />}
            rightComponent={
                <F_AuthFormLayout>
                    <F_FormTitle title="Email 2FA" />
                    <F_FormSubtitle subtitle="Enter the 6-digit code sent to your email" />
                    <F_FormSixDigitCodeInputField
                        value={code}
                        onChange={handleChange}
                    />
                    <F_Spacing vertical={20} />
                    <F_FormButton
                        id="2fa-email-submit-button"
                        label="Verify Code"
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        fullWidth
                    />
                    <F_Spacing vertical={30} />
                    <F_FormClickableText
                        text="Didn't receive the code?"
                        clickableText="Resend code"
                        url="/resend-code"
                    />
                </F_AuthFormLayout>
            }
        />
    );
};
