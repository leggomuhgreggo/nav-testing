// app/_layout.tsx

import { Stack } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function  RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal-stack" options={{ headerShown: false, presentation: 'modal' }}/>
      </Stack>
  );
}
