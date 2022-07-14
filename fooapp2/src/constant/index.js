import { Dimensions } from 'react-native'
import ICONS from "./icons";

const COLORS={
    // primary:"rgba(110,192,94,255)",
    light2:"#cccccc",
    light1:"#f6f9f8",
    white:"#fff",
    // lightPrimary:"#daf8d4",
    dark:"#053951",
    bgLight:'#f7f7f6',
    
    danger: '#F32013',

    primary:'#f40404',
    // light:'#d9d7d4',
    // black:'#090a09',
    black:"#121212",
    black2:"#1e1e1e",
    light:"#e1dfe3",
    lightGray:"#949494",
    //'#040404',
    maroon:'#5f1211',
    brown:'#2a0d0d',
    gray:'#7c7c74',
    grayMedium:'#7a7474',
    secondaryGray:'#3c443c',
    grayDark:'#3b3c3c',
    warning: '#ffc107',
    success: '#4bb543',
    info: '#6f6f6f',
    green:'#04f904',
    disabled: '#c2c2c2',




    // =============
    lightPink:"#fef3f3",
    mango:"#fec55e",
    tomato:"#f54749",
    black:"#2c2c2c",
    white:"#ffffff"
}

const IMAGES={
    logo:require('../assets/logo.png'),
    _1:require('../assets/1.png'),
    _2:require('../assets/2.png'),
    _3:require('../assets/3.png'),
    _3b:require('../assets/3b.png'),
     firends:require('../assets/friends.png'),
    join:require('../assets/join.png'),
     logo:require('../assets/logo.png'),
    match:require('../assets/match.png'),
    smily:require('../assets/smily.png'),
    menu:require('../assets/menu.png'),
    emogi:require('../assets/emogi.png'),
    fire:require('../assets/fire.png'),
    dislike:require('../assets/dislike.png'),
    like:require('../assets/like.png'),
    arrow:require('../assets/arrowIcon.png'),
}

const manageFonts =(name)=>{
    return{
        _r:name + '-Regular',
        _m:name + '-Medium',
        _b:name + '-Bold'
    }
}
const FONTS={
    Poppins:manageFonts('Poppins')
}




const {width, height}= Dimensions.get('screen');

const screenWidth=width
const screenHeight= height

const wp = widthPerc => {
	return  width* widthPerc /100;
}

const hp = heightPerc => {
	return height * heightPerc/100;
}
export {
	IMAGES,
	ICONS,
    FONTS,
	COLORS,
    screenHeight,
    screenWidth,
	wp,
	hp,
};
