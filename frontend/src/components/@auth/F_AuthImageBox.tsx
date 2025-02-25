import React from "react";
import { Box } from "@mui/material";

interface F_AuthImageBoxProps {
    image: string;
}

export const F_AuthImageBox: React.FC<F_AuthImageBoxProps> = ({ image }) => {
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
                src={image}
                alt={"Auth Image"}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
            />
        </Box>
    );
};