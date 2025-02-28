import React from "react";
import { useNavigate } from "react-router-dom";
import { F_PageLayout } from "../@layouts";
import { F_Box, F_Button, F_ErrorCodeTitle, F_Typography } from "../@core";

export const F_NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <F_PageLayout navigation={<></>}>
            <F_Box>
                <F_ErrorCodeTitle title={"404"} />
                <F_Typography customColor={"#000"}>
                    The page you are looking for doesn’t exist or has been moved.
                </F_Typography>
                <F_Button
                    id="not-found-button"
                    label="GO BACK TO HOME PAGE"
                    onClick={handleGoBack}
                    variant="contained"
                    fullWidth
                />
            </F_Box>
        </F_PageLayout>
    );
};
