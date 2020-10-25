/*import React,{useState,useEffect} from 'react';
import Nav from './navigation/Nav';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default () =>{
  
  return (
    <Navigation/>
  )
}
export function Navigation ()  {
  const [theme,setTheme]=useState("dark")
  const getTheme=async()=>{
    if((await AsyncStorage.getItem("theme"))=="light"){
      await AsyncStorage.setItem("theme","dark")
      setTheme("dark")
    }else{
      await AsyncStorage.setItem("theme","light")
      setTheme("light")
    }
  }
  useEffect(() => {
    getTheme();
  }, []);
  return (
    <Nav theme={theme}/>
  )
}*/
/* Using context api */
 import React,{useState,useEffect} from 'react';
import Nav from './navigation/Nav';
import 'react-native-gesture-handler';
import ThemeContext,{ThemeProvider} from './context/ThemeContext';
 
export default () =>{
    return(
      <ThemeProvider>
          <Navigation />
          </ThemeProvider>
    )
}
  export function Navigation ()  {
    const {theme} = React.useContext(ThemeContext)
    return (
      <Nav theme={theme}/>
    )
  }
  

/* using Redux */
/*
import React from 'react';
import Nav from './navigation/Nav';
import 'react-native-gesture-handler';
import {createStore,combineReducers} from 'redux';
import {Provider,useSelector} from 'react-redux';
import {themeReducer} from './reducers/themeReducer'


const rootReducer = combineReducers({
      theme:themeReducer
  })
  const store = createStore(rootReducer)
export default () =>{
      return(
        <Provider store={store}>
            <Navigation/>
        </Provider>
      )
  }
 export function Navigation ()  {
      let currentTheme = useSelector(state=>{
          return state.theme
      })
    return (
        <Provider store={store}>
    <Nav theme={currentTheme?"dark":"light"}/>
    </Provider>
    )
  };
  */