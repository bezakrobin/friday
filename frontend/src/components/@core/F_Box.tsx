import React from "react";
import { Box } from "@mui/material";

interface F_NotFoundBoxProps {
    children: React.ReactNode;
}

export const F_Box: React.FC<F_NotFoundBoxProps> = ({ children}) => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "300px",
            }}
        >
            {children}
        </Box>
    );
};
