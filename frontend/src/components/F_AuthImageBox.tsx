import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../assets/background.jpg";

export const F_AuthImageBox: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <img
                src={backgroundImage as string}
                alt={"sign in image"}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
            />
        </Box>
    );
};