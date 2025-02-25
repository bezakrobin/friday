import React from "react";
import { TextField } from "@mui/material";

interface F_FormInputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
}

export const F_FormInputField: React.FC<F_FormInputFieldProps> = ({
                                                                      label,
                                                                      type,
                                                                      name,
                                                                      value,
                                                                      onChange,
                                                                      required = false,
                                                                  }) => {
    return (
        <TextField
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            fullWidth
            variant="outlined"
            sx={{
                marginBottom: "1rem",
                "& .MuiInputLabel-root": {
                    fontWeight: "bold",
                },
            }}
        />
    );
};
