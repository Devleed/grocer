import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Card from './Card';

const Masonry = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.masonryContainer}>
        <View style={styles.column1}>
          {props.data
            .filter((_, index) => index % 2 !== 0)
            .map((item, index) => (
              <Card item={item} key={index} />
            ))}
        </View>
        <View style={styles.column2}>
          {props.data
            .filter((_, index) => index % 2 === 0)
            .map((item, index) => (
              <Card item={item} key={index} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Masonry;

const styles = StyleSheet.create({
  masonryContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 20,
  },
  column1: {
    flex: 1,
    padding: 10,
    paddingRight: 5,
  },
  column2: {
    flex: 1,
    padding: 10,
    paddingLeft: 5,
    marginTop: 60,
  },
});
