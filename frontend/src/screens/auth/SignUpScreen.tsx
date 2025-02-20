import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/sign-up">;

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Sign Up</Text>
        </View>
    );
};