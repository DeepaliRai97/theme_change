import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import { useTheme } from 'react-navigation';


const SignUp = ({navigation}) => {
    let theme = useTheme();
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Sign up</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Get Started</Text>
       </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SignUp;