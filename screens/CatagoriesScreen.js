import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CATAGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CatagoryGridTile from '../components/CatagoryGridTile';

const CatagoriesScreen = props => {
  const renderGridItem = itemData => {
    return <CatagoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
      props.navigation.navigate({
        routeName: 'CatagoryMeals',
        params: {catagoryId: itemData.item.id}
      });
    }} />
  };
  // CatagoriesScreen.navigationOptions = {

  // };
  return (
    <FlatList data={CATAGORIES} renderItem={renderGridItem} numColumns={2} />
    // <View style={styles.screen}>
    //   <Text>Catagories Screen</Text>
    //   <Button
    //     title="Solid Button"
    //     icon={{
    //         name: "arrow-right",
    //         size: 15,
    //         color: "white"
    //       }}
    //     // type="outline"
    //     onPress={() => {
    //       props.navigation.navigate({routeName: 'CatagoryMeals'});
    //     //   props.navigation.push({routeName: 'CatagoryMeals'});        // can be used to navigate to the same page if needed
    //     }}
    //   />
    //    <Button
    //    style={{marginTop:"20"}}
    //     title="Solid Button"
    //     type="outline"
    //     // type="outline"
    //     onPress={() => {
    //       props.navigation.navigate({routeName: 'CatagoryMeals'});
    //     //   props.navigation.push({routeName: 'CatagoryMeals'});        // can be used to navigate to the same page if needed
    //     //similarly .pop, .replace and many more are there
    //     }}
    //   />
    // </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default CatagoriesScreen;
