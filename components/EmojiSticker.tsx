import { View, ImageSourcePropType, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSourcePropType; 
}

export default function EmojiSticker({ imageSize, stickerSource }: EmojiStickerProps) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Drag gesture to move the sticker around
  const dragGesture = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  // Double-tap gesture to scale the sticker
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
      } else {
        scaleImage.value = imageSize;
      }
    });

  // Combine drag and double-tap gestures
  const combinedGesture = Gesture.Simultaneous(dragGesture, doubleTapGesture);

  // Animated styles for position and scale
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <GestureDetector gesture={combinedGesture}>
      <Animated.View style={[styles.stickerContainer, containerStyle]}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={imageStyle}
        />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  stickerContainer: {
    position: 'absolute',
    top: 74,
    left: -14,
    zIndex: 10,
  },
});
