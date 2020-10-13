import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList141058Navigator from '../features/ArticleList141058/navigator';
import ArticleList141041Navigator from '../features/ArticleList141041/navigator';
import ArticleList141040Navigator from '../features/ArticleList141040/navigator';
import ArticleList141039Navigator from '../features/ArticleList141039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList141058: { screen: ArticleList141058Navigator },
ArticleList141041: { screen: ArticleList141041Navigator },
ArticleList141040: { screen: ArticleList141040Navigator },
ArticleList141039: { screen: ArticleList141039Navigator },

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
