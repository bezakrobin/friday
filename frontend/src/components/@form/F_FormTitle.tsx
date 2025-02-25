import React from "react";
import { Typography } from "@mui/material";

interface F_FormTitleProps {
    title: string;
}

export const F_FormTitle: React.FC<F_FormTitleProps> = ({ title }) => {
    return (
        <Typography
            align={"center"}
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "2rem" }}
        >
            {title}
        </Typography>
    );
};