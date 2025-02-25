import React from 'react';
import { Box } from '@mui/material';

interface F_SignInLayoutProps {
    leftComponent: React.ReactNode;
    rightComponent: React.ReactNode;
}

export const F_SignInLayout: React.FC<F_SignInLayoutProps> = ({ leftComponent, rightComponent }) => {
    return (
        <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
            <Box flex={1} p={2}>
                {leftComponent}
            </Box>
            <Box flex={1} p={2}>
                {rightComponent}
            </Box>
        </Box>
    );
};
