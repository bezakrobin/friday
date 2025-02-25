import React from "react";
import { Typography } from "@mui/material";

interface F_FormInputLabelProps {
    label: string;
}

export const F_FormInputLabel: React.FC<F_FormInputLabelProps> = ({ label }) => {
    return (
        <Typography
            component="label"
            sx={{
                display: "block",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                color: "text.primary",
            }}
        >
            {label}
        </Typography>
    );
};
