import React from "react";
import { Typography } from "@mui/material";

interface F_ErrorCodeTitleProps {
    title: string;
}

export const F_ErrorCodeTitle: React.FC<F_ErrorCodeTitleProps> = ({ title }) => {
    return (
        <Typography variant="h1" fontWeight={700} color="#FC601D">
            {title}
        </Typography>
    );
};
