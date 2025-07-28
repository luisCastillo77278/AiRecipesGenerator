import Button from "@components/common/Button";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>sign in</Text>
        <Button
          text="Sign In"
          onPress={() => console.log("Sign In Pressed")}
          bgColor="tomato"
          rounded={5}
          color="#FFFFFF"
          paddingX={10}
          paddingY={15}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignIn;