import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FavoriteCard from '../FavoriteComponents/FavoriteCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {deleteFromFavorite} from '../slices/appSlice';

const MyFavorite = () => {
  const favorites = useSelector(state => state.appItems.favourites);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <Swipeable renderRightActions={() => rightSwipe(item)}>
        <FavoriteCard data={item} />
      </Swipeable>
    );
  };

  const handleDelete = id => {
    dispatch(deleteFromFavorite(id));
  };
  const rightSwipe = item => {
    return (
      <TouchableOpacity
        style={styles.right_swipe}
        activeOpacity={0.7}
        onPress={() => handleDelete(item.id)}>
        <View>
          <AntDesign name="delete" color="#fff" size={38} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.favorite_main_view}>
      <GestureHandlerRootView>
        <View>
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.favorite__view}
          />
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  favorite_main_view: {
    backgroundColor: '#F4F5F9',
    flex: 1,
    padding: 10,
  },
  favorite__view: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    gap: 14,
  },
  right_swipe: {
    backgroundColor: '#ff4a4a',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyFavorite;
