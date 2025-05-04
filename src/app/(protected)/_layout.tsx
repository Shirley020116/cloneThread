import { Stack } from 'expo-router';

export default function ProtectedLayout(){
  return (
  <Stack>
    <Stack.Screen name='(Tabs)' options= {{ headerShown: false}} />
    <Stack.Screen 
    name='new'
    options= {{ title: "New Thread", presentation: 'model', animation: 'slide_from_bottom'}} 
    />
  </Stack>
  );
}