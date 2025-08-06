import Button from "@components/common/Button";
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>sign in</Text>
        <View style={{

        }}>
          <Text>Your Email</Text>
          <TextInput style={{
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 15,
            paddingHorizontal: 10,
            width: '100%',
          }} />
        </View>

        <Button
          text="Sign In"
          onPress={() => console.log("Sign In Pressed")}
          bgColor="#6200ee"
          rounded={5}
          color="#FFFFFF"
          paddingX={10}
          paddingY={15}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  fieldContent: {
    rowGap: 5,
    backgroundColor: 'cyan',
    width: '100%'
  }
})

export default SignIn;