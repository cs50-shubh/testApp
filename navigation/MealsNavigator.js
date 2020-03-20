import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CatagoryMScreen from '../screens/CatagMScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Catagories: {
        screen: CatagoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Catagories'
        }
    },
    CatagoryMeals: {
      screen: CatagoryMScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
);

export default createAppContainer(MealsNavigator);
