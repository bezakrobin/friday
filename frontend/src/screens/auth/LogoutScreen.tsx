import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/logout">;

export const LogoutScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Logout</Text>
        </View>
    );
};