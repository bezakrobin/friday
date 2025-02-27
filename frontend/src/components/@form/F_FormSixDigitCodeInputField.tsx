import React, { useEffect } from "react";
import { TextField, Box } from "@mui/material";

interface F_FormSixDigitCodeInputFieldProps {
    value: string;
    onChange: (newValue: string) => void;
    error?: boolean;
    helperText?: string;
}

export const F_FormSixDigitCodeInputField: React.FC<F_FormSixDigitCodeInputFieldProps> = ({
                                                                                              value,
                                                                                              onChange,
                                                                                          }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = e.target.value;

        if (newValue.match(/^[0-9]?$/)) {
            const newCode = value.split('');
            newCode[index] = newValue;
            onChange(newCode.join(''));

            // Focus on the next input field after a valid input
            if (newValue && index < 5) {
                const nextInput = document.getElementById(`digit-${index + 1}`);
                if (nextInput) {
                    (nextInput as HTMLElement).focus();
                }
            }

            // If the field becomes empty, focus on the previous one
            if (!newValue && index > 0) {
                const previousInput = document.getElementById(`digit-${index - 1}`);
                if (previousInput) {
                    (previousInput as HTMLElement).focus();
                }
            }
        }
    };

    const focusFirstInput = () => {
        const firstInput = document.getElementById("digit-0");
        if (firstInput) {
            (firstInput as HTMLElement).focus();
        }
    };

    useEffect(() => {
        focusFirstInput();
    }, []);

    return (
        <Box display="flex" justifyContent="center" gap={1}>
            {Array.from({ length: 6 }).map((_, index) => (
                <TextField
                    key={index}
                    id={`digit-${index}`}
                    value={value[index] || ""}
                    onChange={(e) => handleInputChange(e, index)}
                    inputProps={{ maxLength: 1, pattern: "[0-9]*" }}
                    variant="outlined"
                    sx={{
                        width: 40,
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
                />
            ))}
        </Box>
    );
};
