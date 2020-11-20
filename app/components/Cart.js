import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from '../native components/Text';
import Spacer from '../native components/Spacer';
import Button from '../native components/Button';

const CartItem = () => {
  return (
    <Spacer vertical={20}>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={require('../assets/pic1.jpg')} />
        <Text size={12} color="gray">
          1 x
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          size={14}
          color="white"
          style={{ width: 140 }}
        >
          lorem ipsum dolor set amet consector
        </Text>
        <Text h5 color="gray">
          $24.00
        </Text>
      </View>
    </Spacer>
  );
};

const Cart = ({ opened }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartBlink}>
        <Text h4 color="white">
          Cart
        </Text>
        <View style={styles.cartItemsBlink}>
          <Image style={styles.image} source={require('../assets/pic1.jpg')} />
          <Image style={styles.image} source={require('../assets/pic2.jpg')} />
          <Image style={styles.image} source={require('../assets/pic3.jpg')} />
        </View>
        <View style={styles.itemCount}>
          <Text>1</Text>
        </View>
      </View>

      <Spacer vertical={50}>
        <View style={styles.cartItems}>
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </Spacer>

      <View style={styles.totalAmount}>
        <Text h5 color="gray">
          total:
        </Text>
        <Text h3 color="white">
          $50.22
        </Text>
      </View>

      <Button
        title="Next"
        rounded
        mainColor="#ffb03a"
        btnStyle={{ marginTop: 'auto' }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartBlink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCount: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffb03a',
    borderRadius: 50,
  },
  cartItemsBlink: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
