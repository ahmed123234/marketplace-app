import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './SubInfo'
const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: SIZES.base,
      marginHorizontal: SIZES.base * 2
    }}>
      <Image source={bid.image} resizeMode='contain' style={{
        width: 48, height: 48
      }} />
      <View>
        <Text style={{
          // fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by: {bid.name}
        </Text>

        <Text style={{
          // fontFamily: FONTS.regular,
          fontSize: SIZES.small - 2,
          color: COLORS.secondary
        }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid

const styles = StyleSheet.create({})