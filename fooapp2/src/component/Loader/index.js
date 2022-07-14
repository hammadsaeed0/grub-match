import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { COLORS, hp, wp } from '../../constant'

const Loader = () => {
    return (
        <View style={styles.container}>
         <ActivityIndicator size={70} color={COLORS.green}/>
         <Text style={{fontFamily:'Montserrat-Medium', marginTop:10, fontSize:14 , color:COLORS.green}}>Loading...</Text>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        zIndex:2000,
        top:0,
        left:0,
        right:0,
        bottom:0,
        height:hp(100),
        width:wp(100),
        backgroundColor:'rgba(255,255,255,0.3)'
    }
})
