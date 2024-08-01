import React, { createContext, useState } from 'react';

// Create the context
export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Functions to manage the inventory
  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </InventoryContext.Provider>
  );
};
import React, { createContext, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Initialize with an empty array
  const [notifications, setNotifications] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
    sendNotification(
      `Item Added: ${item.name}`,
      `Item "${item.name}" was added to the inventory.`,
      'add-circle'
    );
  };

  const deleteItem = (id) => {
    const itemToDelete = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    sendNotification(
      'Item Deleted',
      `Item "${itemToDelete.name}" was deleted from the inventory.`,
      'delete'
    );
  };

  const updateItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    sendNotification(
      'Item Updated',
      `Item "${updatedItem.name}" was updated.`,
      'update'
    );
  };

  const sendNotification = (title, message, icon) => {
    setNotifications([...notifications, { id: Date.now(), title, message, icon }]);
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, deleteItem, updateItem, notifications }}>
      {children}
    </InventoryContext.Provider>
  );
};
