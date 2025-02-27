import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            label={label}
            type={type === "password" && !showPassword ? "password" : "text"}
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
                "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                        borderColor: "#FC601D",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#FC601D",
                    },
                    "& input:-webkit-autofill": {
                        WebkitTextFillColor: "#000",
                    },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "#FC601D",
                },
            }}
            inputProps={{
                style: { WebkitBoxShadow: "0 0 0 1000px white inset", color: "#000" },
            }}
            InputProps={{
                endAdornment: type === "password" && (
                    <InputAdornment position={"end"}>
                        <IconButton
                            aria-label={"toggle password visibility"}
                            onClick={handleClickShowPassword}
                            edge={"end"}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};
