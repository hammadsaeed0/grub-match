// import { Icon } from '@rneui/base';
import {Icon} from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import {ICONS, COLORS, IMAGES, wp, hp, FONTS} from '../constant';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import Slider from '@react-native-community/slider';
import Geolocation from 'react-native-geolocation-service';

import {
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  View,
  TextInput,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { baseURL, httpRequest} from '../config/index';
const CreateRoom = ({navigation}) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [radius, setRadius] = useState('');
  const [geoInfo, setGeoInfo] = useState('');
  const [indicator, setIndicator] = useState(false);
  const [responce, setResponce] = useState();
  // useEffect(() => {
  //   const socket = io(ENDPOINT);
  // }, []);

  const generateCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setCode(code);
  };
  const location1 = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            var data = position.coords;
            console.log(data);
          },
          error => {
            console.log(error);
          },

          {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
        );
      } else {
        // console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const changeScreen = async () => {
    if (
      name === '' ||
      zip === '' ||
      code === ''
    ) {
      ToastAndroid.showWithGravity(
        'Please fill all the Inputs',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } else {
      setIndicator(true);
      const body = { name, city, address, radius, zip, code, state}
      const res = await httpRequest.post(`${baseURL}/createRoom`, body)
      // console.log("res", res.data.message)
      if (res.data.message === 'create') {
            navigation.replace('Swap', {data: res.data});
      }else {
               console.warn('Invalid Data');
             }
      // axios
      //   .post(`http://192.168.7.152/3000/createRoom`, {
      //     name,
      //     city,
      //     address,
      //     radius,
      //     zip,
      //     code,
      //     state,
      //   })
      //   .then(r => {
      //     // console.log(r.data.message);
      //     if (r.data.message === 'create') {
      //       navigation.replace('Swap', {data: r.data});
      //     } else {
      //       console.warn('Invalid Data');
      //     }
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
  };

  useEffect(() => {
    location1();
  }, []);

  // console.log('cordinstes>>>>>>', setGeoInfo);

  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.maincontainer}>
        <View style={styles.headerContainer}>
          <Pressable
            style={styles.backbutton}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="arrowleft" type="antdesign" color={COLORS.tomato} />
          </Pressable>
          {/* <Icon name="" /> */}
        </View>

        <View style={styles.row}>
       
          <Text style={styles.headingtext}>
            Create a group of your friends to start
          </Text>

          
            <Image style={styles.smily} source={IMAGES.emogi} />


        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor={'grey'}
            onChangeText={setName}
            value={name}
          />
        </View>
        {/* <View style={styles.addressContainer}>
          <View style={styles.addressheading}>
            <Icon
              name="location-pin"
              type="simplelineicons"
              color={COLORS.tomato}
            />
            <Text style={styles.addressingheadingtext}>Address</Text>
          </View>
          <View style={styles.addressInput}>
            <TextInput
              placeholder="street address"
              placeholderTextColor={'grey'}
              style={styles.streetInput}
              onChangeText={setAddress}
              value={address}
            />
          </View>
          <View style={styles.totalAddressContainer}>
            <View style={styles.cityAddressContainer}>
              <TextInput
                placeholder="City"
                placeholderTextColor={'grey'}
                style={styles.streetInput}
                onChangeText={setCity}
                value={city}
              />
            </View>
            <View style={styles.cityAddressContainer}>
              <TextInput
                placeholder="State"
                placeholderTextColor={'grey'}
                style={styles.streetInput}
                onChangeText={setState}
                value={state}
              />
            </View>
          
          </View>
        </View> */}
          <View style={styles.addressheading}>
            <ICONS.Octicons
              name="location"
              color={COLORS.tomato}
              size={18}
            />
            <Text style={styles.addressingheadingtext}>Zip</Text>
          </View>
          <View style={[styles.cityAddressContainer,{marginTop:10}]}>
              <TextInput
                placeholder="zip"
                placeholderTextColor={'grey'}
                style={styles.streetInput}
                onChangeText={setZip}
                value={zip}
                keyboardType="numeric"
              />
            </View>
      </View>
      <View>
        <View style={styles.addressheading1}>
          {/* <Icon name="location-pin" type="simplelineicons" color={COLORS.tomato} /> */}
          <Icon1 name="location-arrow" size={25} color={COLORS.tomato} />
          <Text style={styles.addressingheadingtext}>Max Radius</Text>
        </View>
        <Slider
          style={{width: wp(90), height: hp(3), alignSelf: 'center'}}
          minimumValue={1}
          maximumValue={20}
          
          thumbTintColor={COLORS.tomato}
          minimumTrackTintColor={COLORS.tomato}
          maximumTrackTintColor="gray"
          onValueChange={value => setRadius(Math.floor(value))}
        />
        <Text style={{width: '100%', fontFamily:FONTS.Poppins._b, fontWeight:"bold", left: '45%'}}>{ radius} Miles</Text>
      </View>
      <View style={styles.totalAddressContainer1}>
        <View style={styles.cityAddressContainer1}>
          <View style={styles.streetInput}>
            <Text style={{color:!code? COLORS.lightGray: COLORS.black2 }}>{code||"Code"}</Text>
            <ICONS.Feather name="copy" color={COLORS.light2} size={20}/>
          </View>
        </View>
        <TouchableOpacity onPress={generateCode}>
          <View
            style={{
              height: 40,
              width: wp(35),
              justifyContent: 'center',
              marginVertical: 15,
              borderRadius: 50,
              right: 30,
              backgroundColor: COLORS.mango,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 15,
                color: 'white',
                fontWeight: '600',
              }}>
              {' '}
              Generate Code
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
      disabled={code.length===0}
       style={[styles.ButtomBtn, {backgroundColor: code.length===0? COLORS.lightGray: COLORS.tomato } ]} 
       onPress={changeScreen}>
        <Icon2 name="food-outline" size={20} color={COLORS.white} />
        <Text style={{fontSize: 19, margin: '2%', color: 'white'}}>
          Start Swiping
        </Text>
       {!!indicator && <ActivityIndicator size="large" color="white" animating={indicator} />}
      </TouchableOpacity>
    </ScrollView>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fef3f3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    height: (height / 100) * 7,
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
    color: COLORS.dark,
    fontSize: 24,
    // fontWeight: '600',
    marginLeft: '5%',
    fontFamily: FONTS.Poppins._b,
    fontWeight:"bold",
    width: '70%',
  },
  inputContainer: {
    height: 50,
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
  },
  input: {
    fontSize: 22,
    color: '#1D1F20',
    alignSelf: 'center',
    fontFamily: FONTS.Poppins._r,
    // width: '100%',
    // textDecorationLine: 'underline',
    // width: '95%',
  },
  addressContainer: {
    marginTop: 5,
    height: 180,
    width: '90%',
  
   
    marginBottom:"3%"
  },
  addressheading: {
    marginHorizontal: '5%',
    marginTop:'4%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressingheadingtext: {
    color: '#1D1F20',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: '1%',
  
  },
  addressInput: {
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
    // marginHorizontal: '10%',
    backgroundColor: 'white',
  },
  row:{flexDirection:"row", marginBottom:'5%'},
  streetInput: {
    color: '#1D1F20',
    fontSize: 16,
    flexDirection:"row",
    justifyContent:"space-between",
    width: '100%',
  },
  totalAddressContainer: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
  },
  cityAddressContainer: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: 20,
    marginVertical: 10,
    marginTop:20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  smily: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    position:"absolute",
   left:wp(50),
   marginTop:hp(4.5)
    
    // marginLeft:'10%'
   
  },
  addressheading1: {
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    color: '#1D1F20',
    marginTop: '1%',
  },
  totalAddressContainer1: {
    height: 90,
    marginVertical:12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cityAddressContainer1: {
    height: 50,
    width: wp(40),
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  streetInput1: {
    color: '#1D1F20',
    fontSize: 16,
    width: '100%',
  },
  ButtomBtn: {
    width: wp(90),
    height: hp(8),
    backgroundColor: COLORS.tomato,
    alignSelf: 'center',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CreateRoom;
