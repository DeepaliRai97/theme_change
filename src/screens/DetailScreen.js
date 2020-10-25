
import React ,{Component} from 'react';
import { View,Text,Button,Dimensions,Animated,PanResponder,ScrollView,Image} from 'react-native';
import { useTheme } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width
const DetailScreen = () => {
  const animation = new Animated.ValueXY({x:0,y:SCREEN_HEIGHT-90})
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderGrant:(evt,gestureState)=>{animation.extractOffset()},
    onPanResponderMove:(evt,gestureState)=>{animation.setValue({x:0,y:gestureState.dy})},
    onPanResponderRelease:(evt,gestureState)=>{if(gestureState.dy<0){
      Animated.spring(animation.y,{
        toValue:-SCREEN_HEIGHT+110,
        tension:1,
        useNativeDriver:false
      }).start()
    }else if(gestureState.dy>0){
      Animated.spring(animation.y,{
        toValue:SCREEN_HEIGHT-110,
        tension:1,
        useNativeDriver:false,
      
      }).start()
    }}
  })
  const animatedHeight = {
    transform:animation.getTranslateTransform()
  }
  const animatedImageHeight = animation.y.interpolate({
    inputRange:[0,SCREEN_HEIGHT-90],
    outputRange:[200,32],
    extrapolate:"clamp"
  })
  const animatedSongTitleOpacity = animation.y.interpolate({
    inputRange:[0,SCREEN_HEIGHT-500,SCREEN_HEIGHT-90],
    outputRange:[0,0,1],
    extrapolate:"clamp"
  })
  const animatedIamgeMarginLeft = animation.y.interpolate({
    inputRange:[0,SCREEN_HEIGHT-90],
    outputRange:[SCREEN_WIDTH/2-100,10],
    extrapolate:"clamp"
  })
  const animatedHeaderHeight = animation.y.interpolate({
    inputRange:[0,SCREEN_HEIGHT-90],
    outputRange:[SCREEN_HEIGHT/2,30],
    extrapolate:"clamp"
  })
  const animatedSongDetailOpacity = animation.y.interpolate({
    inputRange:[0,SCREEN_HEIGHT-500,SCREEN_HEIGHT-90],
    outputRange:[1,0,0],
    extrapolate:"clamp"
  })
  let theme = useTheme();
  return (
   <Animated.View style={{flex:1,color:theme === 'dark' ? '#fff' : '#000' }}>
      <Animated.View style={[animatedHeight,{position:'absolute',left:0,right:0,zIndex:10,height:SCREEN_HEIGHT,marginBottom:20}]}>
      <Animated.View 
      {...panResponder.panHandlers}
      style={{height:animatedHeaderHeight,borderTopWidth:1,borderTopColor:'#ebe5e5',flexDirection:'row',alignItems:'center'}}>
        <View style={{flex:4,flexDirection:'row',alignItems:'center'}}>
          <Animated.View style={{height:animatedImageHeight,width:animatedImageHeight,marginLeft:animatedIamgeMarginLeft}}>
            <Image style={{flex:1,width:null,height:null}} source={require('../../assets/images/rr.jpg')}/>
          </Animated.View>
          <Animated.Text style={{opacity:animatedSongTitleOpacity,fontSize:18,paddingLeft:10,color:theme === 'dark' ? '#fff' : '#000'}}>
            Song (live)
          </Animated.Text>
        </View>
        <Animated.View style={{opacity:animatedSongTitleOpacity,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
          <Icon name="stop-circle" size={32} color={theme === 'dark' ? '#fff' : '#000'}/>
          <Icon name="play" size={29} color={theme === 'dark' ? '#fff' : '#000'}/>
        </Animated.View>
      </Animated.View>
      <Animated.View style={{height:animatedHeaderHeight,opacity:animatedSongDetailOpacity}}>
      <View style={{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
      <Icon size={25} name="fast-backward" color={theme === 'dark' ? '#fff' : '#000'}/>
      <Icon name="play" size={29} color={theme === 'dark' ? '#fff' : '#000'}/>
      <Icon size={25} name="fast-forward" color={theme === 'dark' ? '#fff' : '#000'}/>
      </View>
      </Animated.View>
      </Animated.View>
   </Animated.View>
  );
};
export default DetailScreen;
