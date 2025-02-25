import React from 'react';
import { Box } from '@mui/material';

interface F_SignInLayoutProps {
    leftComponent: React.ReactNode;
    rightComponent: React.ReactNode;
}

export const F_AuthLayout: React.FC<F_SignInLayoutProps> = ({ leftComponent, rightComponent }) => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            sx={{
                width: "100vw",
                height: "100vh",
                margin: 0,
                padding: 0,
                overflow: "hidden",
            }}
        >
            <Box
                flex={1}
                sx={{
                    height: "100%",
                    overflow: "hidden",
                    display: "flex",
                }}
            >
                {leftComponent}
            </Box>
            <Box
                flex={1}
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {rightComponent}
            </Box>
        </Box>
    );
};
