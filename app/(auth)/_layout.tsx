import useAuth from '@auth/useAuth';
import { Redirect, Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          animation: 'fade',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          presentation: 'modal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
