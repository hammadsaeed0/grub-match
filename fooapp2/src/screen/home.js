import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
  Pressable,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, hp, ICONS, IMAGES, wp} from '../constant';
import WebView from 'react-native-webview';
import Guide from './guide';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://192.168.1.101:8000';

const Home = ({navigation}) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  const [showGuide, setShowGuide] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

    

  async function fetchData(){
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
       setShowGuide(true)
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } 
      }

      React.useEffect(() => {
          fetchData()
      }, []);
    


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <ScrollView style={{flex:1}}> */}
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <ICONS.AntDesign
                name={'arrowleft'}
                size={22}
                color={COLORS.black2}
              />
            </Pressable>
            <WebView
              source={{
                uri: 'https://hammadsaeed0.github.io/privacy-policy.github.io/',
              }}
              style={{fontSize: 30}}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuView}
          onPress={() => navigation.navigate('Home')}>
          <Image source={IMAGES.menu} style={{display: 'none'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowGuide(true)}
          style={[styles.btn, {backgroundColor: COLORS.mango, borderWidth: 0}]}>
          <Text style={styles.btnText}>How to use</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section1}>
        {/* <Text style={styles.title}>
          Hello, <Text style={{color: COLORS.tomato}}>Ellen!</Text>
        </Text> */}
        <Text style={styles.title}>Let's find a great place to</Text>
        <View style={styles.row}>
          <Text style={[styles.title, {marginLeft: -80}]}>eat today!</Text>
          <Image style={styles.smily} source={IMAGES.smily} />
        </View>
      </View>

      <View style={styles.section2}>
        <View style={styles.section3}>
          <Image source={IMAGES.firends} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'poppins-regular',
              color: COLORS.dark,
            }}>
            Create Group
          </Text>
          <Text style={styles.txt}>
            Create Group Start a new group to begin swiping with friends on
            nearby grub!
          </Text>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              navigation.replace('CreateRoom');
            }}>
            <Text style={styles.btnText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section3}>
          <Image source={IMAGES.join} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'poppins-regular',
              color: COLORS.dark,
            }}>
            Join Group
          </Text>
          <Text style={styles.txt}>
            Join Group Another friend already created a group? Join theirs now!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Join')}
            style={[styles.btn]}>
            <Text style={styles.btnText}>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttomText}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.txt1}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'mailto:parhamzavar@gmail.com?subject=SendMail&body=Description',
              )
            }>
            <Text style={styles.txt1}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Guide isVisible={showGuide} closeModal={() => setShowGuide(false)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    color: COLORS.light,
    flex: 1,
  },
  menu: {
    width: 100,
    height: 100,
    marginTop: -28,
    marginLeft: -24,

    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: COLORS.lightPink,
  },
  btn: {
    elevation: 5,
    backgroundColor: COLORS.tomato,
    borderWidth: 1,
    borderColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: wp(35),
    paddingHorizontal: 15,
    height: 35,
  },
  btnText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
  },
  section1: {
    backgroundColor: COLORS.lightPink,
    minHeight: hp(15),
    paddingBottom: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  smily: {
    width: 25,
    height: 25,
    marginLeft: -80,
    // flex:1.5,
    // marginTop:-10,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 20,
    width: wp(70),
    textAlign: 'center',
    // lineHeight:18
  },
  section2: {
    backgroundColor: COLORS.white,
    height: hp(80),
    marginTop: -30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  section3: {
    backgroundColor: COLORS.lightPink,
    height: hp(28),
    width: wp(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  txt: {
    color: COLORS.gray,
    textAlign: 'center',
    width: '90%',
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(50),
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttomText: {
    height: hp(5),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txt1: {
    color: COLORS.tomato,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  modalView: {
    height: '100%',
    padding: '5%',

    backgroundColor: 'white',
    // borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    justifyContent: 'flex-end',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.tomato,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
