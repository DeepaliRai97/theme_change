import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { useTheme } from 'react-navigation';

const SignIn = ({navigation}) => {
    let theme = useTheme();

    return(
        <View><Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Signin</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        
            <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Get Started</Text>
           
        
    </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({

})
 export default SignIn;