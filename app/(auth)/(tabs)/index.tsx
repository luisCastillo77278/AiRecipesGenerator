import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Home</Text>
        <Link href="/modal" style={{
          paddingTop: 20,
        }}>
          Open modal
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Home;