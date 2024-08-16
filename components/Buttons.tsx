import { StyleSheet, View, Pressable, Text, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ButtonProps {
    label: string;
    theme: string;
}

export default function Button({ label, theme }: ButtonProps) {
  
  if (theme === "primary") {
    return (
        <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
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
    borderRadius: 30, // Rounded edges for elegance
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff5722', // Vibrant background color
    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // For Android shadow
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: '#fff', // White text
    fontSize: 18, // Slightly larger text
    fontWeight: 'bold', // Bold for emphasis
    textTransform: 'uppercase', // All caps for modern style
    letterSpacing: 1, // Letter spacing for elegance
  },
});
