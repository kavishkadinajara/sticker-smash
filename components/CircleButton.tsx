import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CircleButtonProps {
  onPress: () => void;
}

export default function CircleButton({ onPress }: CircleButtonProps) {
  return (
    <View style={styles.circleButtonContainer}>
      <TouchableOpacity style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={36} color="#25292e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 40,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 40,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#fff',
    width:63
  },
});
