import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ItemDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Item Detail</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.quantity}>QTY: {item.quantity}</Text>
        <Text style={styles.price}>₦{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 60 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    backgroundColor: '#4682b4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // Adjust to center the title
  },
  body: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 380,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'left',
    width: '100%',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  category: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  quantity: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
    width: '100%',
  },
});
