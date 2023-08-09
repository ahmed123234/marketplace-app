import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { FocusStatusBar, HomeHeader, NFTCard } from '../../componenets'
import { COLORS, NFTData } from '../../constants'
import { FlatList } from 'react-native-gesture-handler'
const Home = () => {

  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filterdData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if(filterdData.length) {
      setNftData(filterdData);
    } else {
      setNftData(NFTData)
    }
  }
  return (
    <SafeAreaView>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={nftData}
            renderItem={({ item }) => (
              <NFTCard data={item} />
            )}

            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            
          
          />
          {/* set this view as a background for the flatList*/}
          <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0, 
            // backgroundColor: 'red',
            zIndex: -1
          }}>
            <View style={{
              backgroundColor: COLORS.primary,
              height: 300,
              // opacity: .7
            }}/>

            <View style={{
              flex: 1,
              backgroundColor: COLORS.white,
              
              // opacity: .7
            }}/>

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})