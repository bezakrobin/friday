import React from "react";
import { Grid2 } from "@mui/material";

interface F_SignInLayoutProps {
    leftComponent: React.ReactNode;
    rightComponent: React.ReactNode;
}

export const F_SignInLayout: React.FC<F_SignInLayoutProps> = ({ leftComponent, rightComponent }) => {
  return (
    <Grid2 container style={{ minHeight: '100vh'}}>
        <Grid2 item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {leftComponent}
        </Grid2>
        <Grid2 item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {rightComponent}
        </Grid2>
    </Grid2>
  );
};