import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { LandingScreen } from "../screens/LandingScreen";
import { SignInScreen } from "../screens/auth/SignInScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen";
import { TwoFAEmailScreen } from "../screens/auth/TwoFAEmailScreen";
import { TwoFAGoogleScreen } from "../screens/auth/TwoFAGoogleScreen";
import { CreateNewPasswordScreen } from "../screens/auth/CreateNewPasswordScreen";
import { LogoutScreen } from "../screens/auth/LogoutScreen";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Home: "",
            "auth/sign-in": "auth/sign-in",
            "auth/sign-up": "auth/sign-up",
            "auth/forgot-password": "auth/forgot-password",
            "auth/2fa/email": "auth/2fa/email",
            "auth/2fa/google-authenticator": "auth/2fa/google-authenticator",
            "auth/create-new-password": "auth/create-new-password/:sessionId",
            "auth/logout": "auth/logout",
        },
    },
};

export const AppNavigator = () => {
    return (
        <NavigationContainer linking={linking} theme={DefaultTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={LandingScreen} />
                <Stack.Screen name="auth/sign-in" component={SignInScreen} />
                <Stack.Screen name="auth/sign-up" component={SignUpScreen} />
                <Stack.Screen name="auth/forgot-password" component={ForgotPasswordScreen} />
                <Stack.Screen name="auth/2fa/email" component={TwoFAEmailScreen} />
                <Stack.Screen name="auth/2fa/google-authenticator" component={TwoFAGoogleScreen} />
                <Stack.Screen name="auth/create-new-password" component={CreateNewPasswordScreen} />
                <Stack.Screen name="auth/logout" component={LogoutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

