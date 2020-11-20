import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import GestureRecognizer from 'react-native-swipe-gestures';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';

import Text from '../native components/Text';
import Button from '../native components/Button';
import Spacer from '../native components/Spacer';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailScreen = ({ route, navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;
  const [quantity, setQuantity] = useState(1);
  const { item } = route.params;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        delay: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <GestureRecognizer onSwipeDown={() => navigation.navigate('home')}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.photo}
            style={{
              width,
              height: height * 0.4,
              resizeMode: 'cover',
            }}
          />
        </SharedElement>
      </GestureRecognizer>
      <Animated.ScrollView
        style={{ opacity }}
        showsVerticalScrollIndicator={false}
      >
        <Spacer around={20} bottom={100}>
          <Animated.View style={{ transform: [{ translateY }] }}>
            <Text h3 bold>
              {item.title}
            </Text>
            <Spacer vertical={10}>
              <Text size={12} color="gray">
                {item.type}
              </Text>
            </Spacer>
            <Spacer vertical={10}>
              <View style={styles.priceContainer}>
                <View style={styles.quantity}>
                  <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <MaterialIcon name="add" style={styles.quantityIcons} />
                  </TouchableOpacity>
                  <Spacer horizontal={10}>
                    <Text>{quantity}</Text>
                  </Spacer>
                  <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
                    <MaterialIcon name="remove" style={styles.quantityIcons} />
                  </TouchableOpacity>
                </View>
                <Text h2 bold>
                  {`$${Math.round(Number(item.price) * quantity)}.00`}
                </Text>
              </View>
            </Spacer>

            <Spacer vertical={10}>
              <Text h6 bold>
                about this product
              </Text>
              <Spacer top={5} />
              <Text size={14} color="gray" style={{ lineHeight: 25 }}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book.
              </Text>
            </Spacer>
          </Animated.View>
        </Spacer>
      </Animated.ScrollView>

      <View style={styles.cta}>
        <Ionicon name="heart-outline" style={styles.heartIcon} />
        <Button
          title="Add To Cart"
          mainColor="#ffb03a"
          rounded
          btnStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

DetailScreen.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [`item.${item.id}.photo`];
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingVertical: 8,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    width: 140,
    borderRadius: 20,
  },
  quantityIcons: {
    color: '#696969',
    fontSize: 25,
  },
  cta: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    alignItems: 'center',
    padding: 20,
  },
  heartIcon: {
    fontSize: 30,
    color: 'gray',
    marginRight: 20,
  },
});
