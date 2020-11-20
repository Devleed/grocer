import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Masonry from '../components/Masonry';
import data from '../data';
import Cart from '../components/Cart';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const [cartOpened, setCartOpened] = useState(false);

  const pull = (direction) => {
    if (direction === 'up') setCartOpened(true);
    else setCartOpened(false);

    Animated.timing(translateY, {
      toValue: direction === 'up' ? -530 : 0,
      duration: 1000,
      easing: Easing.bezier(1, 0, 0.24, 1.01),
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={[styles.masonry, { transform: [{ translateY }] }]}>
        <Masonry data={data} />
      </Animated.View>
      <GestureRecognizer
        onSwipeUp={() => pull('up')}
        onSwipeDown={() => pull('down')}
      >
        <Animated.View style={[styles.cart, { transform: [{ translateY }] }]}>
          <Cart opened={cartOpened} />
        </Animated.View>
      </GestureRecognizer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  masonry: {
    height: height * 0.85,
    width: '100%',
    backgroundColor: '#f0e5e2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  cart: {
    height: height * 0.85,
    width: '100%',
    backgroundColor: 'black',
  },
});
