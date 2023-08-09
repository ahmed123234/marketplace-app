import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { useRoute  } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'
import { CircularButton, RectButton, FocusStatusBar, SubInfo, DetailsBid, DetailsDesc } from '../componenets'
import React from 'react'
const DetailsHeader = ({ data, navigation}) => (
  <View style={
    {
      width: '100%',
      height: 373,
    }
  }>
    <Image source={ data.image } resizeMode='cover'  style={{
      width: "100%",
      height: '100%'
    }}/>
    <CircularButton 
      handlePress={() => navigation.goBack()} 
      imgUrl={assets.left} 
      top={StatusBar.currentHeight + 10}
      left={15}  
    />

  <CircularButton 
        imgUrl={assets.heart} 
        top={StatusBar.currentHeight + 10} // beacuse the status bar is different on verious devices 
        right={15}  
      />
  </View>
)
const Details = ({ navigation, } ) => {
  const { data } = useRoute().params
 
  console.log("data", data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusStatusBar backgroundColor='transparent' barStyle='dark-content' transLucent={true} />
      <View style={{
        width: '100%',
        position: 'absolute', 
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContentL: 'ceneter',
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS} />
      </View>

      <FlatList 
        data={data.bids}
        renderItem={ ({ item }) => (
        <React.Fragment>
           <DetailsBid bid={item} />
           {/* <Image source={data.image} /> */}
        </React.Fragment>

        )
        }
        keyExtractor={(item) => item.id }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          {
            paddingBottom: SIZES.extraLarge * 3
          }
        }
        ListHeaderComponent= {() => (
          
            <React.Fragment>
              <DetailsHeader  data={data} navigation={navigation} />
              <SubInfo />
              <View style={{padding: SIZES.font}}>
                <DetailsDesc data={data}/>

                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    // fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}>
                    Current Bids
                  </Text>
                )}
              </View>
            </React.Fragment>
          )
        }
      />
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({})