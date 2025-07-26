import { Redirect, Stack } from "expo-router";

const isAuthenticated = true;

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const AuthLayout = () => {

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout;