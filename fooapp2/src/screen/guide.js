import { StyleSheet, Modal,Image, TouchableHighlight, Text, View } from 'react-native'
import React from 'react'
import {COLORS, FONTS, hp, IMAGES, screenHeight, screenWidth, wp} from '../constant'
import ViewSlider from 'react-native-view-slider'

const Guide = ({isVisible, closeModal}) => {

    let slideData=[
        {
            title:"Create a group with yor friends",
            image:IMAGES._1,
            text:"First, create a group to add your friends to join. Simply enter an address and the maximum distance you are willing to travel to eat. Nothing more, nothing less!"
        },
        {
            title:"Start Swapping across different restaurant",
            image:IMAGES._2,
            text:"You and your friends can begin swiping on available option that fit your distance criteria. Keep swiping until you get a Match."
        },
        {
            title:"Find a restarant and start eating outside",
            image:IMAGES._3,
            text:"You ‘Match’ when everyone swipes right on the same restaurant. Say goodbye to setting for the same old options or one person deciding for everyone!</"
        },
    ]

    const renderSlideItem=(item,index)=>(
        <View key={index} style={styles.viewBox}>  
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text> 
        </View>
    )
  return (
    <Modal visible={isVisible} transparent animationType='slide'>
        <TouchableHighlight underlayColor={'transparent'} onPress={()=>closeModal()} style={styles.backdrop}>
            <View></View>
        </TouchableHighlight>
            <View style={styles.modal}>
           
            <Text style={styles.h2}>How To Use</Text>
          {isVisible ? 
          <View>
          <ViewSlider 
                renderSlides = {slideData.map((item,index)=>renderSlideItem(item,index)  )}
                style={styles.slider}     //Main slider container style
                height = {hp(60)}    //Height of your slider
                slideCount = {slideData.length}    //How many views you are adding to slide
                dots = {true}     // Pagination dots visibility true for visibile 
                dotActiveColor = {COLORS.mango}    //Pagination dot active color
                dotInactiveColor = 'gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide = {false}    //The views
                slideInterval = {3000}    //In Miliseconds

                /> 
                </View>
                : closeModal}
            </View>
      
    </Modal>
  )
}

export default Guide

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: screenWidth,
        padding: 10,
        alignItems: 'center',
        height: 150
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    dotContainer: {
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: -35
    },
    backdrop:{
        // backgroundColor:"rgba(0,0,0,0.2)",
        height:hp(10),
     
    },
    modal:{
        height: hp(80),
        backgroundColor:COLORS.white,
        // marginTop:hp(10),
        alignItems:'center',
        paddingTop:hp(5),
        borderTopLeftRadius:30,
        borderTopRightRadius:25
    },
    h2:{
        fontWeight:"bold",
        fontSize:22,
        fontFamily:FONTS.Poppins._b,
        color:COLORS.black,
        marginBottom:hp(2)
    },
    image:{
        resizeMode:'contain',
        height:300,
        width:300,
        marginTop:280
    },
    title:{
        fontWeight:"bold",
        fontSize:23,
        width:wp(80),
        lineHeight:29,
        textAlign:'center',
        fontFamily:FONTS.Poppins._b,
        color:COLORS.black,
        marginBottom:hp(2)
    },
    text:{
        // fontWeight:"bold",
        fontSize:14,
        fontFamily:FONTS.Poppins._r,
        color:COLORS.black,
        lineHeight:20,
        width:wp(80),
         textAlign:'center',
        // marginBottom:hp(5)
    },

})