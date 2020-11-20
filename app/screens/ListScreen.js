import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const item = {
  id: 1,
  photo: require('../assets/bg-cover-1.jpg'),
};

const ListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('detail', { item })}
      >
        <SharedElement
          id={`item.${item.id}.photo`}
          style={{
            height: 200,
            width: 200,
            position: 'absolute',
            bottom: 30,
            left: 30,
          }}
        >
          <Image
            source={item.photo}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </SharedElement>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
