import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

interface FR_ImageBackgroundProps {
    source: any;
}

const FR_ImageBackground: React.FC<FR_ImageBackgroundProps> = ({ source }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={source} style={styles.backgroundImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FR_ImageBackground;
