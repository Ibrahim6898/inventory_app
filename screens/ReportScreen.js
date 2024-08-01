import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card, ListItem } from 'react-native-elements'; // Ensure you have this library installed

const ReportScreen = ({ navigation }) => {
  // Example data; replace with actual data
  const reportData = [
    { title: 'Total Sales', value: '$1,234,567' },
    { title: 'Total Orders', value: '123,456' },
    { title: 'New Customers', value: '789' },
    { title: 'Inventory Status', value: '85% in stock' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} accessibilityLabel="Open menu">
          <MaterialIcons name="menu" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Overview</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} accessibilityLabel="View notifications">
          <MaterialIcons name="notifications" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {reportData.map((item, index) => (
          <Card key={index} containerStyle={styles.card}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title style={styles.cardTitle}>{item.title}</ListItem.Title>
                <ListItem.Subtitle style={styles.cardValue}>{item.value}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  header: {
    height: 60 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    backgroundColor: '#4682b4', // Primary color from Material Design
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  content: {
    padding: 16,
  },
  card: {
    borderRadius: 10,
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'white',
    elevation: 1, // Add shadow for Android
    shadowOffset: { width: 0, height: 1 }, // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  cardValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default ReportScreen;
