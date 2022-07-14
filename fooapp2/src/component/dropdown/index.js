import React,{useState, useEffect} from 'react'
import { Platform, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { COLORS,hp, wp,ICONS, screenHeight } from '../../constant'
import * as Animatable from 'react-native-animatable';
export const DropDownField = ({
    placeholder,  dropdownModalStyle, itemList, style, label,
    onTermChange,
    icon,
    iconFamily,
    iconColor,
    iconStyle,
    editable = true,
    setisdropDownModalOpen
}) => {
   
    const [list, setList] = useState([])
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState(false)
    const [selectedVCalue, setSelectedValue] = useState('')

    useEffect(() => {
        let arr = []
        if(typeof itemList[0]=== 'string'){
          for (let index = 0; index <itemList.length; index++) {
              const element = itemList[index];
              arr.push({
                type:element  
              })
          }
          setList(arr)
      }
      if(search){
          let temp= []
          temp =arr.filter(val => val.type.toLowerCase().includes(search.toLowerCase()))
          temp.length>=1  ?setDropdown(true): setDropdown(false)
        setList(temp)
      }
      // // console.log(dropdown)
      if(dropdown){
        setisdropDownModalOpen(true)
      }else{
        setisdropDownModalOpen(false)
      }
      
      
    }, [itemList,search, dropdown])
    
  
    return (
      <View style={style&&style}>
           {!!label&& <Text style={styles.label}>{label}</Text>}
          <TouchableOpacity
          
          onPress={()=>setDropdown(!dropdown)}> 
            <View style={styles.textInput}>
                
                
                <TextInput 
                style={{color:COLORS.green}}
                placeholder={placeholder} 
                placeholderTextColor={COLORS.light} 
                onFocus={()=>setDropdown}
                editable={false}
                value={selectedVCalue?selectedVCalue: search} onChangeText={(val)=>{
                  setSelectedValue('')
                  setSearch(val)}}/>
              
                {!!icon ? (
            iconFamily === 'AntDesign' ? (
                
                    <ICONS.AntDesign
                    size={18}
                      name={icon}
                      style={[
                        styles.arrow_down,
                        iconStyle,
                        iconColor && {color: iconColor},
                      ]}
                    />
               
            ) : (
               
              <ICONS.MaterialIcons name={icon} color={iconColor} size={18}/>
          
            )
          ) : (
            <View
            disabled={!editable}
            style={{height:"100%",  alignItems:'flex-end', width:'20%', justifyContent:'center'}}
            // onPress={()=>setDropdown(!dropdown)}
            >
            <ICONS.AntDesign
              name='down'
              size={18}
              style={[styles.arrow_down,{color:COLORS.green}]}
            />
            </View>
          )}
            </View>
            </TouchableOpacity>
            { !!dropdown && 
              <Animatable.View 
              animation={"flipInX"}
              // animation={dropdown? "flipInX":"flipOutX"}
               easing="ease-out" duration={1000} iterationCount={1}
              >
            <View style={[styles.dropdownModal,
              // Platform.OS==='ios'&& dropdown &&{zIndex:-500,position:'relative'} ,
               dropdownModalStyle]}>
                <ScrollView
                nestedScrollEnabled
                >
                    {list.map((item,index)=>(
                        <TouchableOpacity onPress={()=>{
                            setDropdown(false)
                            setSearch(
                                typeof item === 'string' || typeof item === 'number'
                                  ? item
                                  : item.title,
                              )
                              onTermChange(item.type)
                              setSelectedValue(item.type)
                        }}>
                            <Text style={styles.dropdownItem}>{item.type}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            </Animatable.View>
           } 
        </View>
    )
}


const styles = StyleSheet.create({
    textInput:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: '2%',
        height: 50,
        // alignItems: 'center',
        // backgroundColor: COLORS.light,
        marginLeft:-20,
        marginTop:-3,
        // borderBottomWidth: 1,
        // borderBottomColor: COLORS.lightGray,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:10
    },
    label: {
        // ...FONTS.body4_r.OpenSans,
        // ...getFont('OpenSans_m_14'),
        paddingBottom: '2%',
        color: COLORS.gray3,
        lineHeight: 16,
    },
    dropdownModal: {
      // position: Platform.OS==='ios'?'relative': 'absolute',
      width:wp(80),
        minHeight: 200,
        height: 'auto',
        // top: Platform.OS==='ios'?0: 50,
        maxHeight:140,
        // zIndex: -1000,
        // height:200,
        backgroundColor: COLORS.black,
        marginLeft: -16,
        elevation: 4,
        overflow: 'hidden',
        elevation: 6,
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10
      },
      
  dropdownItem: {
    backgroundColor: COLORS.black,
    padding: '4%',
    // borderRadius:20,
    borderWidth: 1,
    zIndex:1000,
    color:COLORS.green,
    borderColor: COLORS.green,
    height: 50,
    width:wp(80),
    textTransform: 'capitalize',
  },
})
