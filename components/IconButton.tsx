import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Define a type for valid MaterialIcons names
type IconName =
  | 'add'
  | 'refresh'
  | 'save'
  | 'edit'
  | 'delete'
  | 'save-alt'
  // Add more icon names as needed

interface IconButtonProps {
  icon: IconName;
  label: string;
  onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={28} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#6200ea',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 100,
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
