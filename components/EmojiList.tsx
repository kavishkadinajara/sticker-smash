import React, { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, TouchableOpacity, ViewStyle, ImageStyle } from 'react-native';

interface EmojiListProps {
  onSelect: (emoji: any) => void;
  onCloseModal: () => void;
}

export default function EmojiList({ onSelect, onCloseModal }: EmojiListProps) {
  const [emojis] = useState<Array<any>>([
    require('../assets/images/e1.png'),
    require('../assets/images/e2.png'),
    require('../assets/images/e3.png'),
    require('../assets/images/e4.png'),
    require('../assets/images/e5.png'),
    require('../assets/images/e6.png'),
    require('../assets/images/e7.png'),
    require('../assets/images/e8.png'),
    require('../assets/images/e9.png'),
    require('../assets/images/e10.png'),
    require('../assets/images/e11.png'),
    require('../assets/images/e12.png'),
    require('../assets/images/e13.png'),
    require('../assets/images/e14.png'),
    require('../assets/images/e15.png'),
    require('../assets/images/e16.png'),
    require('../assets/images/e17.png'),
    require('../assets/images/e18.png'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
          style={styles.emojiButton}
        >
          <Image source={item} style={styles.image} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  } as ViewStyle,
  emojiButton: {
    marginRight: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  } as ViewStyle,
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  } as ImageStyle,
});
