import React from "react";

interface F_SpacingProps {
    horizontal?: number;
    vertical?: number;
}

export const F_Spacing: React.FC<F_SpacingProps> = ({ horizontal = 0, vertical= 0 }) => {
    return <div style={{ width: horizontal, height: vertical}} />;
};