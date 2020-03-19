import React from "react";
import { TextInput, View, Button, Text } from "react-native";

const SignUp = ({ route: { params }, navigation }) => {
  return (
    <View
      style={{ alignItems: "center", height: 300, justifyContent: "center" }}
    >
      <TextInput placeholder="Type your email here" onChange={updateUsername} />
      <TextInput
        onChange={params.updatePassword}
        secureTextEntry={true}
        placeholder="Type new password here"
      />
      <TextInput
        onChange={params.updateConfirmedPassword}
        secureTextEntry={true}
        placeholder="Confirm password"
      />
      <Button title="Sign Up!" onPress={params.signUp} />
    </View>
  );
};

export default SignUp;
