import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, StatusBar, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AlertSettingsScreen({ navigation }) {
  const [lowStockAlert, setLowStockAlert] = useState(false);
  const [restockReminder, setRestockReminder] = useState(false);
  const [generalNotification, setGeneralNotification] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alert Settings</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Low Stock Alert</Text>
          <Switch
            value={lowStockAlert}
            onValueChange={setLowStockAlert}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Restock Reminder</Text>
          <Switch
            value={restockReminder}
            onValueChange={setRestockReminder}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>General Notification</Text>
          <Switch
            value={generalNotification}
            onValueChange={setGeneralNotification}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    backgroundColor: '#4682b4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
});
