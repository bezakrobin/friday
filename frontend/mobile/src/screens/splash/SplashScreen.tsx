import React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import FR_Button from "../../components/FR_Button";
import FR_RotatingText from "../../components/FR_RotatingText";
import backgroundImage from "../../../assets/images/background.jpg";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.overlay} />

                <Text style={styles.text}>F. R. I. D. A. Y.</Text>

                <View style={styles.rotatingTextContainer}>
                    <FR_RotatingText text={"Automate your"} texts={["life", "work", "home", "app"]} interval={2000} />
                </View>

                <View style={styles.buttonContainer}>
                    <FR_Button
                        buttonText="Sign In"
                        onPress={() => console.log("Sign In Pressed")}
                        textColor="#fff"
                        fontSize={18}
                        sx={{ backgroundColor: "#ff9800", borderRadius: 15, height: 50 }}
                    />

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>
                            Don't have an account?{" "}
                            <TouchableOpacity onPress={() => console.log("Sign Up Pressed")}>
                                <Text style={styles.signupLink}>Sign up</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    text: {
        fontSize: 38,
        color: "#fff",
        fontWeight: 900,
        letterSpacing: 6,
        position: "absolute",
        top: "20%",
    },
    rotatingTextContainer: {
        marginVertical: 20,
        overflow: "hidden",
        position: "absolute",
        top: "22.5%",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        width: "100%",
        alignItems: "center",
    },
    signupContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    signupText: {
        fontSize: 16,
        color: "#fff",
    },
    signupLink: {
        fontSize: 16,
        color: "#ff9800",
        fontWeight: "bold",
        top: 3.5
    },
});

export default SplashScreen;
