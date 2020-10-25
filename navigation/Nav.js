import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';
import DetailScreen from '../src/screens/DetailScreen'
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProfileScreen from '../src/screens/ProfileScreen';
import { useTheme } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import SplashScreen from '../src/screens/SplashScreen'
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions:({headerShown:false})
    },
  Profile:{
      screen:ProfileScreen,
     navigationOptions:({headerShown:false})
     
  },
 
},
{
  contentComponent:ProfileScreen
}
)
const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: DrawerNavigator,
    navigationOptions:({headerShown:false}),
   
  },
  
  Detail:{
    screen:DetailScreen,
    navigationOptions:({headerShown:false}),
}
},
{
  tabBarComponent:BottomtabsNavigator
}

)

const ThemeConstants = {
  light: {
    backgroundColor: '#fff',
    fontColor: '#000',
    activeTintColor: 'blue',
    inactiveTintColor: '#ccc',
  },
  dark: {
    backgroundColor: '#000',
    fontColor: '#fff',
    activeTintColor: '#fff',
    inactiveTintColor: '#888',
  },
};
const BottomtabsNavigator = () => {
  let theme = useTheme();
  return (
   <BottomTabBar
        activeTintColor={ThemeConstants[theme].activeTintColor}
          inactiveTintColor={ThemeConstants[theme].inactiveTintColor}
          style={{
            backgroundColor: ThemeConstants[theme].backgroundColor,
          }}
        />
      )}
    
  

const AppNavigator = createStackNavigator({
  SplashScreen:{
    screen: SplashScreen,
    navigationOptions:({headerShown:false}),
  },
  SignIn:{
    screen: SignIn,
    navigationOptions:({headerShown:false}),
  },
  SignUp:{
    screen: SignUp,
    navigationOptions:({headerShown:false}),
  },
 Home: {
      screen: BottomNavigator,
      navigationOptions:({headerShown:false}),
      },
 
      
});
const SwitchNavigator = createSwitchNavigator({
  HomeScreen:{
         screen:AppNavigator
     },
  },
)
export default createAppContainer(SwitchNavigator);