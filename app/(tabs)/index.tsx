import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View, Platform, Alert } from 'react-native';
import Button from '@/components/Buttons';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import React from 'react';

const PlaceholderImage = require('@/assets/images/tea.jpg');

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOption, setShowAppOption] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<any>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
 const imageRef = useRef<View>(null);

  // Request permissions for media library access
  if (status?.granted === false) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOption(true);
    } else {
      Alert.alert('No image selected', 'You did not select any image');
    }
  };

  const onReset = () => {
    setSelectedImage(null);
    setPickedEmoji(null);
    setShowAppOption(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        // Check if imageRef is assigned
        if (imageRef.current) {
          const uri = await captureRef(imageRef, {
            height: 440,
            quality: 1,
          });
  
          if (uri) {
            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert('Success', 'Image saved to gallery!');
          }
        }
      } catch (error) {
        console.error('Failed to save the image: ', error);
        Alert.alert('Error', 'Failed to save the image');
      }
    } else {
      try {
        const domToImage = (await import('dom-to-image')).default; // Dynamically import for web
        if (imageRef.current instanceof HTMLElement) {
          const dataUrl = await domToImage.toJpeg(imageRef.current, {
            quality: 0.95,
            width: 320,
            height: 440,
          });
          let link = document.createElement('a');
          link.download = 'sticker-smash.jpeg';
          link.href = dataUrl;
          link.click();
        }
      } catch (e) {
        console.error('Failed to capture image on web:', e);
        Alert.alert('Error', 'Failed to save the image on web');
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false} style={styles.imageWrapper}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOption ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button theme="secondary" label="Use this photo" onPress={() => setShowAppOption(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}></EmojiList>
      </EmojiPicker>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 88,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
});
