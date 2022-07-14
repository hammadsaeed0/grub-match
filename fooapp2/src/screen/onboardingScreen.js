import { StyleSheet, Text, View, Image, Button , TouchableOpacity, Pressable } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'


const Done = ({...props})=>(
  <TouchableOpacity
  style={{marginHorizontal:8}}
  {...props}
  >
  <Text style={{fontSize:16, color:'black'}}>Done</Text>
  </TouchableOpacity>
  )

const OnboardingScreen = ({navigation}) => (
  <View>

  
  
  <Onboarding
    onDone={()=> navigation.replace('Home')}
    showNext = {false}
    showSkip = {false}
    DoneButtonComponent={Done}
    bottomBarHighlight={false}
    
    showDone={true}
        pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/1.png')} style={{marginTop: "-25%"}} />,
        title: 'Create a group with your friends',
        subtitle: <Text style={{ width: 120, height:80}}>HammadSaeed</Text>
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/2.png')} style={{marginTop: "-25%"}} />,
        title: 'Start swiping across different restaurant',
        subtitle: <Text style={{textAlign: 'center' , color: 'black' , fontSize: 14 , lineHeight: 18 , width: '90%'}}>You and your friends can begin swiping on available option that fit your distance criteria. Keep swiping until you get a Match.</Text>,
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/3.png')} style={{marginTop: "-25%"}} />,
        title: 'Find a restaurant and start eating outside',
        subtitle: <Text style={{textAlign: 'center' , color: 'black' , fontSize: 14 , lineHeight: 18 , width: '90%'}}>
          You ‘Match’ when everyone swipes right on the same restaurant. Say goodbye to setting for the same old options or one person deciding for everyone!</Text>,
      }
    ]}   
  />
  
  </View>
  
);

export default OnboardingScreen;

