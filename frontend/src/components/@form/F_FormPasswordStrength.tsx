import React, { useState, useEffect } from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

interface F_FormPasswordStrengthProps {
    password: string;
}

const getPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
};

export const F_FormPasswordStrength: React.FC<F_FormPasswordStrengthProps> = ({ password }) => {
    const [strength, setStrength] = useState(0);

    useEffect(() => {
        setStrength(getPasswordStrength(password))
    }, [password]);

    const strengthColors = ["#e0e0e0", "#ff4d4d", "#ff944d", "#ffcc00", "#66cc66", "#008000"];
    const strengthLabels = ["Very Weak", "Weak", "Moderate", "Good", "Strong", "Very Strong"];

    return (
        <Box sx={{ width: "100%" - 1, textAlign: "left", marginTop: 0, marginBottom: 3,  paddingX: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: "bold", color: "#666666"}}>
                Password strength: <Typography variant="caption" sx={{ color: strengthColors[strength], fontWeight: "bold" }}>{strengthLabels[strength]}</Typography>
            </Typography>
            <LinearProgress
                variant="determinate"
                value={(strength / 5) * 100}
                sx={{ height: 8, borderRadius: 4, backgroundColor: "#e0e0e0", '& .MuiLinearProgress-bar': { backgroundColor: strengthColors[strength] } }}
            />
        </Box>
    );
};
