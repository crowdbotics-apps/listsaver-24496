import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps204725Navigator from '../features/Maps204725/navigator';
import Additem204724Navigator from '../features/Additem204724/navigator';
import Maps204720Navigator from '../features/Maps204720/navigator';
import UserProfile204716Navigator from '../features/UserProfile204716/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps204725: { screen: Maps204725Navigator },
Additem204724: { screen: Additem204724Navigator },
Maps204720: { screen: Maps204720Navigator },
UserProfile204716: { screen: UserProfile204716Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
