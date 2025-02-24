import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import TwoFAEmailScreen from "../screens/auth/TwoFAEmailScreen";
import TwoFAGoogleScreen from "../screens/auth/TwoFAGoogleScreen";
import CreateNewPasswordScreen from "../screens/auth/CreateNewPasswordScreen";
import LogoutScreen from "../screens/auth/LogoutScreen";
import SplashScreen from "../screens/splash/SplashScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="auth/sign-in" component={SignInScreen} />
            <Stack.Screen name="auth/sign-up" component={SignUpScreen} />
            <Stack.Screen name="auth/forgot-password" component={ForgotPasswordScreen} />
            <Stack.Screen name="auth/2fa/email" component={TwoFAEmailScreen} />
            <Stack.Screen name="auth/2fa/google-authenticator" component={TwoFAGoogleScreen} />
            <Stack.Screen name="auth/create-new-password" component={CreateNewPasswordScreen} />
            <Stack.Screen name="auth/logout" component={LogoutScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;