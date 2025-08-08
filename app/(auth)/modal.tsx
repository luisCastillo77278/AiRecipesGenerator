import { usePhoto } from "@store/photoStore";
import { Link, router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Modal = () => {
  const isPresented = router.canGoBack();
  const { photo } = usePhoto();

  console.log({ photo })

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text>Modal</Text>
        <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
        {isPresented && <Link href="../">Dismiss modal</Link>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
});

export default Modal;