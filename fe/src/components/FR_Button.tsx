import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, ViewStyle, StyleProp } from "react-native";

interface FR_ButtonProps {
    buttonText: string;
    onPress: () => void;
    textColor?: string;
    fontSize?: number;
    sx?: StyleProp<ViewStyle>;
}

const FR_Button: React.FC<FR_ButtonProps> = ({
                                                 buttonText,
                                                 onPress,
                                                 textColor = "#fff",
                                                 fontSize = 18,
                                                 sx = {},
                                             }) => {
    return (
        <Button
            mode="contained"
            onPress={onPress}
            style={[styles.button, sx]}
            labelStyle={[styles.buttonLabel, { fontSize, color: textColor }]}
            rippleColor={"rgba(255, 255, 255, 0.3)"}
            contentStyle={styles.buttonContent}
        >
            {buttonText}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        justifyContent: "center",
        alignContent: "center",
        width: "80%",
        elevation: 5,
    },
    buttonLabel: {
        fontWeight: "bold",
    },
    buttonContent: {
        height: "100%",
    },
});

export default FR_Button;
