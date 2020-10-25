

import React,{useState,useEffect} from 'react';
import { View,Text,Switch} from 'react-native';
import { useTheme } from 'react-navigation';
import ThemeContext from '../../context/ThemeContext'
import AsyncStorage from '@react-native-community/async-storage';

/*const ProfileScreen = () => {
  const [theme, setTheme] = useState(false);
  let themes = useTheme()
  const saveThemeState = async () => {
    if (theme) {
      //await AsyncStorage.removeItem("theme");
      //await AsyncStorage.getItem("theme");
        await AsyncStorage.setItem("theme","dark")
      const getdarkTheme = await AsyncStorage.getItem("theme");
      console.log(getdarkTheme)
      console.log(theme)
      setTheme(false)

    } else {
     await AsyncStorage.setItem("theme","light");
      const getlightTheme = await AsyncStorage.getItem("theme")
      console.log(getlightTheme)
      console.log(theme)
      setTheme(true)
    }
  };

  
  useEffect(() => {
    saveThemeState();
  }, [theme]);

  useEffect(() => {
    getThemeState();
  }, []);
 

  const [toggled,setToggled] = useState(false);
  const toggleSwitch = (value) => {
    setToggled(value)
    
  saveThemeState(false)
 
   // toggleTheme()
    //{theme==="dark"?getdarkTheme:getlightTheme}
  }
  
return (
  <View>
     <Switch onValueChange={toggleSwitch} value={toggled}></Switch>
      <Text style={{ color: themes === 'dark' ? '#fff' : '#000' }}>ProfileScreen</Text>
  </View>
 );
}
export default ProfileScreen;

*/
const ProfileScreen = () => {
  
  const {toggleTheme} = React.useContext(ThemeContext)
  let theme = useTheme();
  const [toggled,setToggled] = useState(false);
  const toggleSwitch = (value) => {
    setToggled(value)
    toggleTheme()
    //{theme==="dark"?getdarkTheme:getlightTheme}
  }
  
return (
  <View>
     <Switch onValueChange={toggleSwitch} value={toggled}></Switch>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>ProfileScreen</Text>
  </View>
 );
};
export default ProfileScreen;


/* using Redux */
/*
import React,{useState} from 'react';
import { View,Text,Button,StyleSheet,Switch} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { useTheme } from 'react-navigation';


const ProfileScreen = () => {
  
    let theme = useTheme();
    const [toggled,setToggled] = useState(false);
    const toggleSwitch = (value) => {
      setToggled(value)
      dispatch({type:"change_theme",payload:!currentTheme})
    }
  const currentTheme = useSelector(
    state=>{
      return state.theme
    }
  )
  const dispatch = useDispatch();
  return (
   <View>
        <Switch onValueChange={toggleSwitch} value={toggled}></Switch>
       <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>ProfileScreen</Text>
   </View>
  );
};

export default ProfileScreen;
*/