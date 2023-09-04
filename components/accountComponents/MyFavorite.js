import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import FavoriteCard from '../FavoriteComponents/FavoriteCard';

const MyFavorite = () => {
  return (
    <View style={styles.favorite_main_view}>
      <ScrollView contentContainerStyle={styles.favorite_scroll_view}>
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favorite_main_view: {
    backgroundColor: '#F4F5F9',
    flex: 1,
  },
  favorite_scroll_view: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    gap: 14,
  },
});

export default MyFavorite;
