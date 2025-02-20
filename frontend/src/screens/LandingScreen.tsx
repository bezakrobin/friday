import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LandingScreen = () => {
    const navigation = useNavigation();n

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to F.R.I.D.A.Y</Text>
            <Text style={styles.subtitle}>Your automation assistant</Text>

            <Button title="Sign In" onPress={() => navigation.navigate("auth/sign-in" as never)} />
            <Button title="Sign Up" onPress={() => navigation.navigate("auth/sign-up" as never)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212", // Dark theme
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "#aaa",
        marginBottom: 20,
    },
});
