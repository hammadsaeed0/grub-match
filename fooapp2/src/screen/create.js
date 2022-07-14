import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {
  COLORS,
  FONTS,
  hp,
  IMAGES,
  screenHeight,
  screenWidth,
  wp,
} from '../constant';

const Create = ({navigation}) => {
  // const [images, setImages] = useState([
  //   require('../assets/1.jpg'),
  //   require('../assets/2.jpg'),
  //   require('../assets/3.jpg'),
  // ]);
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        // autoplayLoop
        index={1}
        showPagination
        paginationDefaultColor="gray"
        paginationActiveColor={COLORS.mango}
        paginationStyleItem={{
          width: 10,
          height: 10,
          borderRadius: 5,
          bottom: '30%',
        }}>
        <View style={[styles.child, {backgroundColor: 'white'}]}>
          <Text style={styles.text}>How to Use!</Text>
          <Image source={require('../assets/1.png')} style={styles.img} />
          <Text style={styles.mainTxt}>Create a group with your friends</Text>
          <Text style={styles.subTxt}>
            First, create a group to add your friends to join. Simply enter an
            address and the maximum distance you are willing to travel to eat.
            Nothing more, nothing less!
          </Text>
        </View>

        <View style={[styles.child, {backgroundColor: 'white'}]}>
          <Text style={styles.text}>How to Use!</Text>
          <Image source={require('../assets/2.png')} style={styles.img} />
          <Text style={styles.mainTxt}>
            Start Swapping across different restaurant
          </Text>
          <Text style={styles.subTxt}>
            You and your friends can begin swiping on available option that fit
            your distance criteria. Keep swiping until you get a Match.
          </Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'white'}]}>
          <Text style={styles.text}>How to Use!</Text>
          <Image source={require('../assets/3.png')} style={styles.img} />
          <Text style={styles.mainTxt}>
            Find a restarant and start eating outside
          </Text>
          <Text style={styles.subTxt}>
            You ‘Match’ when everyone swipes right on the same restaurant. Say
            goodbye to setting for the same old options or one person deciding
            for everyone!
          </Text>
          <View
            style={{
              width: '100%',
              height: '10%',
              justifyContent: 'center',
              right: '10%',
            }}>
            <Pressable
              style={{
                width: 70,
                height: 30,
                borderRadius: 5,
                backgroundColor: COLORS.tomato,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
              }}
              onPress={() => {
                navigation.replace('Home');
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Next</Text>
            </Pressable>
          </View>
        </View>
      </SwiperFlatList>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'flex-start'},
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FONTS.Poppins._r,
    fontSize: 25,
    color: COLORS.black,
    bottom: '-6%',
  },
  img: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: '20%',
  },
  mainTxt: {
    alignSelf: 'center',
    fontSize: 30,
    width: '70%',
    textAlign: 'center',
    color: COLORS.black2,
    fontFamily: FONTS.Poppins._r,
    bottom: '8%',
  },
  subTxt: {
    textAlign: 'center',
    bottom: '6%',
    width: '80%',
    alignSelf: 'center',
  },
});

export default Create;
