import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";

type Props = StackScreenProps<AuthStackParamList, "auth/sign-in">;

export const SignInScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
        <Text>Sign In</Text>
    </View>
  );
};