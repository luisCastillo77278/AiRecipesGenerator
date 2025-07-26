import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";

const NotFound = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Text>Not found</Text>
        <Button text="ir a home" onPress={() => router.navigate("/")} />
      </View>
    </SafeAreaView>
  )
}

export default NotFound