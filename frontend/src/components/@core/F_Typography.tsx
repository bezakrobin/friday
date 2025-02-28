import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface F_TypographyProps extends TypographyProps {
    customColor?: string; // Optional custom color prop
}

export const F_Typography: React.FC<F_TypographyProps> = ({
                                                              customColor,
                                                              children,
                                                              ...props
                                                          }) => {
    return (
        <Typography
            {...props}
            sx={{
                color: customColor ? customColor : "inherit",
                ...props.sx,
            }}
        >
            {children}
        </Typography>
    );
};
