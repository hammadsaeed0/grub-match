import React ,{useState, useEffect}from 'react'
import { StyleSheet, Image,Text, View } from 'react-native'
import { COLORS, IMAGES,wp, hp , FONTS} from '../constant'
import * as Animatable from 'react-native-animatable';

const Splash = props => {

     
      setTimeout(() => {
            props.navigation.navigate("Home")
      }, 2000);

  

    
    return (
        <View style={styles.container}>
             <Animatable.View  animation="pulse" easing="ease-out" duration={2000} iterationCount={"infinite"} >
                {/* <RadialGradient style={{width:200,height:200}}
                        colors={['black','green','blue','red']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[100,100]}
                        radius={200}>
           */}
                <Image source={IMAGES.logo} style={styles.image}/>
                {/* </RadialGradient> */}
            </Animatable.View>
        
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    container:{
        width:wp(100),
        height:hp(100),
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.light
    },
    image:{
        width:250,
        height:250,
        resizeMode:'contain'
    },
  
})
