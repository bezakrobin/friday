import React from "react";
import { Box, Paper } from "@mui/material";

interface F_AuthFormLayoutProps {
    children: React.ReactNode;
}

export const F_AuthFormLayout: React.FC<F_AuthFormLayoutProps> = ({ children }) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100%" }}
        >
            <Paper
                sx={{
                    padding: 4,
                    width: 400,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    boxShadow: 3,
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};