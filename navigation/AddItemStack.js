import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddItemScreen from '../screens/AddItemScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AlertSettingsScreen from '../screens/AlertSettingsScreen';

const Stack = createStackNavigator();

export default function AddItemStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="AlertSettings" component={AlertSettingsScreen} />
    </Stack.Navigator>
  );
}
