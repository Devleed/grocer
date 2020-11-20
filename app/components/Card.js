import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from '../native components/Text';
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('detail', { item })}
    >
      <View style={styles.card}>
        <SharedElement
          style={{ width: '100%', height: '60%', marginBottom: 10 }}
          id={`item.${item.id}.photo`}
        >
          <Image style={styles.image} source={item.photo} />
        </SharedElement>
        <View style={styles.info}>
          <Text h5 bold color="#696969">
            {item.price}
          </Text>
          <Text size={14} bold color="#696969">
            {item.title}
          </Text>
          <Text size={12} color="gray">
            {item.type}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
    height: 250,
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
