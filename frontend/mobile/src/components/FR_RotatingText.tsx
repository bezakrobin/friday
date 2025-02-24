import React, { useEffect, useState } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

interface FR_RotatingTextProps {
    text: string;
    texts: string[];
    interval?: number;
}

const FR_RotatingText: React.FC<FR_RotatingTextProps> = ({ text, texts, interval = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const fadeAnim = useState(new Animated.Value(1))[0];
    const translateAnim = useState(new Animated.Value(0))[0];

    const longestWord = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

    useEffect(() => {
        const changeText = () => {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(translateAnim, {
                    toValue: -10,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

                fadeAnim.setValue(0);
                translateAnim.setValue(10);

                Animated.parallel([
                    Animated.timing(translateAnim, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ]).start();
            });
        };

        const intervalId = setInterval(changeText, interval);
        return () => clearInterval(intervalId);
    }, [fadeAnim, translateAnim, texts, interval]);

    return (
        <View style={styles.container}>
            <Text style={styles.staticText}>{text} </Text>

            <View style={[styles.rotatingTextContainer, { width: longestWord.length * 14 }]}>
                <Animated.Text
                    style={[
                        styles.rotatingText,
                        { opacity: fadeAnim, transform: [{ translateY: translateAnim }] },
                    ]}
                >
                    {texts[currentTextIndex]}
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        height: 30,
    },
    staticText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
    },
    rotatingTextContainer: {
        position: "relative",
        height: 30,
        overflow: "hidden",
    },
    rotatingText: {
        fontSize: 24,
        color: "#ff9800",
        fontWeight: "bold",
        position: "absolute",
        top: 3,
    },
});

export default FR_RotatingText;
