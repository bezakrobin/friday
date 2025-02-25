import React from "react";
import { Typography } from "@mui/material";

interface F_FormSubtitleProps {
    subtitle: string;
}

export const F_FormSubtitle: React.FC<F_FormSubtitleProps> = ({ subtitle }) => {
    return (
        <Typography
            align="center"
            sx={{ fontSize: "1rem", color: "text.secondary", marginBottom: "1.5rem" }}
        >
            {subtitle}
        </Typography>
    );
};
