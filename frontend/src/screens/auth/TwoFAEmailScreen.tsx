import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/2fa/email">;

export const TwoFAEmailScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>2FA Email</Text>
        </View>
    );
};