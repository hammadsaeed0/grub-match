import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import {ICONS, COLORS, IMAGES, wp, hp, FONTS} from '../constant';
import {Icon} from '@rneui/themed';
import StarIcon from 'react-native-vector-icons/dist/AntDesign';
import CardsSwipe from 'react-native-cards-swipe';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Swap = props => {

  if (props.route.params.data.message === 'join') {
    var resData =
      props.route.params.data.data.roomData[0].resturentData.businesses;
    var apiDa =
      props.route.params.data.data.roomData[0].resturentData.businesses;
    var name = props.route.params.data.data.mydata.name;
    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('joinUserData', jsonValue);
      } catch (e) {
        console.warn(e);
      }
      storeData(props.route.params.data.data)
    };
  } else if (props.route.params.data.message === 'create') {
    var resData = props.route.params.data.data.apiData.businesses;
    var apiDa = props.route.params.data.data.apiData.businesses;
    var name = props.route.params.data.data.name;
    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('CreateUserData', jsonValue);
      } catch (e) {
        console.warn(e);
      }
      storeData(props.route.params.data.data)
    };
  }

  const [rightswipe, setRightswipe] = useState(0);

  const keys = Object.keys(apiDa);
  let rightswipr = apiDa[keys[rightswipe]];
  let like = {
    name,
    rightswipr,
  };
  let ref = useRef();
  const cardsData = [
    {
      src: require('../assets/abc.jpg'),
      name: 'Abc Restaurant',
      description: '23 Miles Away',
      category: 'Chinese Cuisine',
      rating: 4.8,
    },
    {
      src: require('../assets/2.png'),
      name: 'Delhi Restaurant',
      description: '23 Miles Away',
      category: 'Chinese Cuisine',
      rating: 4.8,
    },
    {
      src: require('../assets/3.png'),
      name: 'Karachi Restaurant',
      description: '23 Miles Away',
      category: 'Chinese Cuisine',
      rating: 4.8,
    },
    {
      src: require('../assets/3b.png'),
      name: 'Sargoda Restaurant',
      description: '23 Miles Away',
      category: 'Chinese Cuisine',
      rating: 4.8,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => props.navigation.navigate('Home')}
          style={styles.backbutton}>
          <Icon name="arrowleft" type="antdesign" color={COLORS.tomato} />
        </Pressable>
      </View>

      <Text style={styles.headingtext}>
        Swipe to find restaurant
        <Image style={styles.smily} source={IMAGES.fire} />
      </Text>
      <Text style={styles.caption}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <View style={styles.shadow1}>
        <View style={styles.shadow2}>
          <View style={styles.shadow3}>
            <CardsSwipe
              ref={swiper => (ref = swiper)}
              cards={resData}
              // onSwiped={val => console.log(val)}
              cardContainerStyle={styles.cardContainer}
              onSwipeChangeDirection={val => console.log('========', val)}
              onSwipedLeft={val => setRightswipe(val)}
              animDuration={350}
              rotationAngle={45}
              renderCard={card => (
                <View style={styles.card}>
                  <View>
                    <Image
                      style={styles.cardImg}
                      source={{uri: card.image_url}}
                    />
                    <View
                      style={{
                        backgroundColor: COLORS.pink,
                        height: '60%',
                        marginTop: '-75%',
                        flexDirection: 'row',
                      }}>
                      <TouchableWithoutFeedback onPress={() => ref.swipeLeft()}>
                        <View
                          style={{
                            backgroundColor: 'red',
                            opacity: 0,
                            flex: 0.5,
                          }}></View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          // console.log(ref);
                          ref.swipeRight();
                        }}>
                        <View
                          style={{
                            backgroundColor: 'blue',
                            opacity: 0,
                            flex: 0.5,
                          }}></View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  <Text style={styles.title}>{card.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <ICONS.Ionicons
                        style={{
                          paddingLeft: 10,
                          paddingRight: 1,
                          paddingTop: 10,
                          marginLeft: 18,

                          transform: [{rotate: '-45deg'}],
                        }}
                        name="send-sharp"
                        color={COLORS.primary}
                        size={15}
                      />
                      <Text style={styles.txt}>
                        {card.location.address1} {'\n'}
                        {/* {card.description} */}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: '10%',
                        flexDirection: 'row',
                        width: '15%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: '-5%',
                      }}>
                      <Text style={styles.txt}>{card.rating}</Text>
                      <StarIcon
                        name="star"
                        size={20}
                        color="#FFDF00"
                        style={{marginTop: 10}}
                      />
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.swapBtn}>
        <TouchableOpacity
          onPress={() => ref.swipeLeft()}
          style={styles.buttomBtn}>
          <Image style={styles.btnImg} source={IMAGES.like} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomBtn}>
          <Image
            style={{width: '40%', resizeMode: 'contain', height: '50%'}}
            source={IMAGES.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => ref.swipeRight()}
          style={styles.buttomBtn}>
          <Image style={styles.btnImg} source={IMAGES.dislike} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightPink,
  },
  row: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 20,

    height: '100%',
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 00,
    //   height: 18,
    // },
    // shadowOpacity: 0.7,
    // shadowRadius: 5.3,
  },
  cardImg: {
    width: '100%',
    height: '90%',
    borderRadius: 13,
  },

  shadow1: {
    backgroundColor: COLORS.white,
    // height:65,
    borderRadius: 20,

    marginTop: 30,
    height: hp(58),
    // backgroundColor:"red",
    alignItems: 'center',

    elevation: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: wp(83),
  },
  shadow2: {
    backgroundColor: COLORS.white,
    // backgroundColor:"pink",
    // height:45,
    height: hp(56),
    borderRadius: 20,

    elevation: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: wp(88),
  },
  shadow3: {
    backgroundColor: COLORS.white,
    // height:28,
    // backgroundColor:"blue",
    // height:45,
    height: hp(54),
    borderRadius: 20,

    marginBottom: 70,
    elevation: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: -5,
    width: wp(92),
  },
  title: {
    color: COLORS.black2,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -20,
    fontFamily: FONTS.Poppins._b,
    paddingHorizontal: '5%',
    // paddingTop:'5%'
  },
  txt: {
    color: COLORS.black2,
    fontSize: 16,
    // paddingHorizontal: '5%',
    marginTop: 10,
    fontFamily: FONTS.Poppins._r,
  },
  headerContainer: {
    height: (height / 100) * 10,
    width: wp(90),
    marginHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backbutton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingtext: {
    color: COLORS.black,
    marginLeft: '-10%',
    fontSize: 22,
    marginTop: -13,
    height: 40,
    padding: 0,
    fontFamily: FONTS.Poppins._b,
    width: '80%',
  },
  smily: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    // marginHorizontal: '75%',
    marginTop: -5,
  },
  caption: {
    color: COLORS.gray,
    width: '90%',
    alignSelf: 'center',
  },
  //   swap: {
  //   width:wp(90),
  //   height:hp(55),
  //   backgroundColor:'red',
  //   alignSelf:"center",
  //   marginTop:'5%'
  // },
  swapBtn: {
    width: '50%',
    height: '9%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 40,
    marginVertical: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    // borderRadius: 13,
  },
  buttomBtn: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardContainer: {
//     width: '92%',
//     height: '70%',
//   },
//   card: {
//     width: '100%',
//     height: '100%',
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.07,
//     shadowRadius: 3.3,
//   },

//   mainContainer: {
//     backgroundColor:'#FEF3F3',
//     flex:1
//   },

//   card: {
//     width:'100%',
//     height:'100%',
//     backgroundColor:'black'
//   }

// })

export default Swap;
