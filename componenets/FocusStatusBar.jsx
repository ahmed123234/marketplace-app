import { StyleSheet, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
const FocusStatusBar = (props) => {
  const isFocused = useIsFocused()
  // props will contain the background color of the status-bar
  return isFocused ? <StatusBar animated={true}  {...props} />: null 
}

export default FocusStatusBar

const styles = StyleSheet.create({})