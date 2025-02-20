import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/auth/SignInScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen";
import { TwoFAEmailScreen } from "../screens/auth/TwoFAEmailScreen";
import { TwoFAGoogleScreen } from "../screens/auth/TwoFAGoogleScreen";
import { CreateNewPasswordScreen } from "../screens/auth/CreateNewPasswordScreen";
import { LogoutScreen } from "../screens/auth/LogoutScreen";

export type AuthStackParamList = {
  "auth/sign-in": undefined;
  "auth/sign-up": undefined;
  "auth/forgot-password": undefined;
  "auth/2fa/email": undefined;
  "auth/2fa/google-authenticator": undefined;
  "auth/create-new-password": { sessionId: string };
  "auth/logout": undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"auth/sign-in"} component={SignInScreen} />
      <Stack.Screen name={"auth/sign-up"} component={SignUpScreen} />
      <Stack.Screen name={"auth/forgot-password"} component={ForgotPasswordScreen} />
      <Stack.Screen name={"auth/2fa/email"} component={TwoFAEmailScreen} />
      <Stack.Screen name={"auth/2fa/google-authenticator"} component={TwoFAGoogleScreen} />
      <Stack.Screen name={"auth/create-new-password"} component={CreateNewPasswordScreen} />
      <Stack.Screen name={"auth/logout"} component={LogoutScreen} />
    </Stack.Navigator>
  );
};