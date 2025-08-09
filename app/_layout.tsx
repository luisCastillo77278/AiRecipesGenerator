import AuthProvider from '@auth/AuthProvider';
import ThemeProvider from '@theme/ThemeProvider';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Layout = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <Slot />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
