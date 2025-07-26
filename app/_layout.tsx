import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "../Auth/AuthProvider";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default Layout;