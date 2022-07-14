import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ICONS, COLORS, IMAGES, wp, hp, FONTS} from '../constant';
import {Icon} from '@rneui/themed';
import OTPTextInput from 'react-native-otp-textinput';
import Toast from 'react-native-toast-message';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {BASE_URL} from '../../api/clinet';
const ENDPOINT = 'http://192.168.1.101:8000';
const socket = io(ENDPOINT, {transports: ['websocket']});

const Join = ({navigation}) => {
  const [inputCode, setInputCode] = useState('');
  const [name, setName] = useState('');
  const [indicator, setIndicator] = useState(false);

  const InputTextBtn = () => {
    if (name === '' || inputCode === '') {
      console.warn('Please Fill All The Form');
    } else {
      setIndicator(true);
      axios
        .post('http://192.168.1.102:3000/joinRoom', {
          name,
          inputCode,
        })
        .then(e => {
          // console.log(e.data.error);
          if (e.data.error === false) {
            navigation.navigate('Swap', {data: e.data});
          } else {
            console.warn('Invalid Code');
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.backbutton}>
          <Icon name="arrowleft" type="antdesign" color={COLORS.tomato} />
        </Pressable>
      </View>

      <View style={styles.row}>
        <Text style={styles.headingtext}>Enter Your Good Code</Text>
        <Image style={styles.smily} source={IMAGES.emogi} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor={'grey'}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: '5%',
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Enter Code
        </Text>
      </View>
      <View
        style={{
          width: '80%',
          height: hp(15),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <OTPTextInput
          textInputStyle={{
            backgroundColor: COLORS.mango,
            borderRadius: 50,
            color: COLORS.white,
            borderBottomWidth: 1,
          }}
          tintColor={COLORS.mango}
          offTintColor={COLORS.mango}
          handleTextChange={text => setInputCode(text)}
        />
      </View>
      <TouchableOpacity style={styles.ButtomBtn} onPress={InputTextBtn}>
        <Icon2 name="food-outline" size={20} color={COLORS.white} />
        <Text style={{fontSize: 19, margin: '2%', color: 'white'}}>
          Start Swiping
        </Text>
        <ActivityIndicator size="large" color="white" animating={indicator} />
      </TouchableOpacity>
    </View>
  );
};
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
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
  maincontainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fef3f3',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  headingtext: {
    color: COLORS.black,
    fontSize: 28,
    // fontWeight: '600',
    marginHorizontal: '5%',
    fontFamily: FONTS.Poppins._b,
    width: '70%',
  },
  smily: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: '75%',
    top: -35,
  },
  ButtomBtn: {
    width: wp(90),
    height: hp(10),
    backgroundColor: COLORS.tomato,
    alignSelf: 'center',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
  },
});
export default Join;
