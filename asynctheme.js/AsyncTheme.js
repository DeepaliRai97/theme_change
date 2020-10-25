/*import React from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const  AsyncTheme = async() =>{
    const [theme,setTheme] = React.useState('light');
    await AsyncStorage.setItem('darktheme', "dark")
  await AsyncStorage.setItem('lighttheme', "light")
  const getdarkTheme = await AsyncStorage.getItem('darktheme')
  const getlightTheme = await AsyncStorage.getItem('lighttheme')
  const toggleTheme = () => {
    if(theme === "light"){
     setTheme(getdarkTheme)
    } else {
      setTheme(getlightTheme)
    }
  return(

  )
}*/