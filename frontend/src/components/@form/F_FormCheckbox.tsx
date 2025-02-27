import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

interface F_FormCheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const F_FormCheckbox: React.FC<F_FormCheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    color="primary"
                    sx={{
                        "&.Mui-checked": {
                            color: "#FC601D !important"
                        }
                    }}
                />
            }
            label={label}
        />
    );
};