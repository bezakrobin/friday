import React from "react";
import { Typography, Link } from "@mui/material";

interface F_FormClickableTextProps {
    text: string;
    clickableText: string;
    url: string;
}

export const F_FormClickableText: React.FC<F_FormClickableTextProps> = ({ text, clickableText, url }) => {
    const parts = text.split(clickableText);

    return (
        <Typography variant="body2" sx={{ textAlign: "center" }}>
            {parts[0]}
            <Link
                href={url}
                underline="none"
                sx={{
                    fontWeight: "bold",
                    color: "#ff7841", // Lighter color
                    cursor: "pointer",
                    mx: 0.5,
                    transition: "color 0.1s ease-in-out",
                    "&:hover": {
                        color: "#FC601D",
                    },
                }}
            >
                {clickableText}
            </Link>
            {parts[1]}
        </Typography>
    );
};
