import React from 'react';
import {View, Text, Platform, StyleSheet, Button} from 'react-native';
import {CATAGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';


const CatagMScreen = props => {
  const catId = props.navigation.getParam('catagoryId');
  const selectedCatagory = CATAGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Catagories Meal Screen</Text>
      <Text>{selectedCatagory.title}</Text>
      <Button
        title="Go to Meals !"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate('Catag\ories');
        }}
      />
    </View>
  );
};
CatagMScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('catagoryId');
  const selectedCatagory = CATAGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCatagory.title,
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CatagMScreen;
