import { StatusBar } from 'expo-status-bar';
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '@/components/Buttons';

const PlaceholderImage = require("@/assets/images/react-logo.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button theme='' label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 88,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});
