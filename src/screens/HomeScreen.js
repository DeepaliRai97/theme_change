
import React from 'react';
import { View,Text,Button, StyleSheet,Animated,PanResponder} from 'react-native';
import { useTheme } from 'react-navigation';

const HomeScreen = ({navigation}) => {
  let theme = useTheme();
  const position = new Animated.ValueXY({x:0,y:0})
  const rotate = position.x.interpolate({
    inputRange:[0,100],
    outputRange:["0deg","360deg"]
  })
  const pan = PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderMove:(e,gesture)=>{
      position.setValue({x:gesture.dx,y:gesture.dy})
    },
    /*onPanResponderMove:Animated.event([
      null,
      {dx:position.x,dy:position.y},
  ],{useNativeDriver: false}),*/
  onPanResponderRelease:() =>{
    //position.setValue({x:0,y:0})
    Animated.spring(position,{
      toValue:{x:0,y:0},
      //duration:2000,
      useNativeDriver:false
    }).start()
  }
  })
 /* Animated.timing(position,{
    toValue:{x:200,y:500},
    duration:2000,
    useNativeDriver:false
  }).start()*/
  return (
   <View style={{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
   }}>
     <Animated.View 
     {...pan.panHandlers}
     style={{
       height:80,
       width:80,
       alignItems:"center",
       justifyContent:"center",
       backgroundColor:"red",
       transform:[
         {translateX:position.x},
          {translateY:position.y},
          {rotate:rotate}

       ]
     }}><Text>cnq</Text>
    </Animated.View>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>HomeScreen</Text>
       
   </View>
  );
};

const styles=StyleSheet.create({
 
})
export default HomeScreen

/*style={{ color: theme === 'dark' ? '#fff' : '#000' }}*/