import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList141094Navigator from '../features/ArticleList141094/navigator';
import ArticleList141093Navigator from '../features/ArticleList141093/navigator';
import BlankScreen15141092Navigator from '../features/BlankScreen15141092/navigator';
import ArticleList141060Navigator from '../features/ArticleList141060/navigator';
import ArticleList141059Navigator from '../features/ArticleList141059/navigator';
import ArticleList141058Navigator from '../features/ArticleList141058/navigator';
import ArticleList141041Navigator from '../features/ArticleList141041/navigator';
import ArticleList141040Navigator from '../features/ArticleList141040/navigator';
import ArticleList141039Navigator from '../features/ArticleList141039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList141094: { screen: ArticleList141094Navigator },
ArticleList141093: { screen: ArticleList141093Navigator },
BlankScreen15141092: { screen: BlankScreen15141092Navigator },
ArticleList141060: { screen: ArticleList141060Navigator },
ArticleList141059: { screen: ArticleList141059Navigator },
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
