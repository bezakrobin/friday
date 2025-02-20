import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/forgot-password">;

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Forgot Password</Text>
        </View>
    );
};