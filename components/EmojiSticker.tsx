import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSourcePropType; // Corrected type for image source
}

export default function EmojiSticker({ imageSize, stickerSource }: EmojiStickerProps) {
  return (
    <View style={styles.stickerContainer}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stickerContainer: {
    position: 'absolute', // More flexible positioning
    top: 0,
    left: 0, // Positioned at top-left, but can be adjusted dynamically
    zIndex: 10, // Ensures the sticker is on top
  },
});
