import React from "react";
import { AppBar, Box, Container } from "@mui/material";

interface F_PageLayoutProps {
    navigation: React.ReactNode;
    children: React.ReactNode;
}

export const F_PageLayout: React.FC<F_PageLayoutProps> = ({ navigation, children }) => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <AppBar position="static">
                {navigation}
            </AppBar>
            <Box component="main" display={"flex"} flex={1} sx={{ width: "100vw"}}>
                <Container sx={{ py: 3, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
};