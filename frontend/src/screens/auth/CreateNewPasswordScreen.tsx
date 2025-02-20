import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/create-new-password">;

export const CreateNewPasswordScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Create New Password</Text>
        </View>
    );
};