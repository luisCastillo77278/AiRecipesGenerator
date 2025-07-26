import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Modal = () => {
  const isPresented = router.canGoBack();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text>Modal</Text>
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