import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from 'react';

interface ButtonProps {
    label: string;
    theme: string;
    onPress: () => void;
}

export default function Button({ label, theme, onPress }: ButtonProps) {
  
  const primaryButtonStyle = theme === "primary"
    ? { backgroundColor: "#fff", borderRadius: 18 }
    : {};
    
  const primaryTextStyle = theme === "primary"
    ? { color: "#25292e" }
    : {};

  const iconVisible = theme === "primary";

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, primaryButtonStyle]}
        onPress={onPress}
      >
        {iconVisible && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, primaryTextStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 60,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    borderRadius: 30,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
