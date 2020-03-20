import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const CatagoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem}
      onPress={props.onSelect}>
      <View style={{...styles.container,...{backgroundColor: props.color}}}>
        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 100,
  },
  container: {
    flex:1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .26,
    shadowOffset:{width:0, height:2},
    shadowRadius: 10,
    elevation:3,
    padding:15,
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  title: {
      fontSize: 18,
      textAlign: 'right'
  }
});
export default CatagoryGridTile;
