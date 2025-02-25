import React from "react";
import { Button } from "@mui/material";

interface F_FormButtonProps {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: "text" | "outlined" | "contained";
    fullWidth?: boolean;
}

export const F_FormButton: React.FC<F_FormButtonProps> = ({
                                                              label,
                                                              onClick,
                                                              variant = "contained",
                                                              fullWidth = false,
                                                          }) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            fullWidth={fullWidth}
            sx={{
                marginTop: "1rem",
                padding: "12px 16px",
                fontWeight: "bold",
                fontSize: "1rem",
                backgroundColor: "#FC601D", "&:hover": { backgroundColor: "#FC601D" }
            }}
        >
            {label}
        </Button>
    );
};
