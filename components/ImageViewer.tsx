import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
}

export default function ImageViewer({ placeholderImageSource }: ImageViewerProps) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 280,
  },
});
