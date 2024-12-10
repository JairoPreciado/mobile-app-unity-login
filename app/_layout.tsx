import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="recovery" />
      <Stack.Screen name="register/step1" />
    </Stack>
  );
};

export default RootLayout;
