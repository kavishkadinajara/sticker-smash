import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface EmojiPickerProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function EmojiPicker({ isVisible, children, onClose }: EmojiPickerProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay with more opacity
  } as ViewStyle,
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  } as ViewStyle,
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  } as ViewStyle,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  } as TextStyle,
  closeButton: {
    padding: 10,
  } as ViewStyle,
});
