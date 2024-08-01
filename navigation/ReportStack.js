import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ReportScreen from '../screens/ReportScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AlertSettingsScreen from '../screens/AlertSettingsScreen';

const Stack = createStackNavigator();

export default function ReportsStack() {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false,  // Disable default header
      }}>
      <Stack.Screen name="Report" component={ReportScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="AlertSettings" component={AlertSettingsScreen} />
    </Stack.Navigator>
  );
}
