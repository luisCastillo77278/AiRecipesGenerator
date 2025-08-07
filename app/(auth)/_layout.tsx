import { Redirect, Stack } from "expo-router";

const isAuthenticated = false;

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const AuthLayout = () => {

  if (!isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', animation: 'fade', headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout;