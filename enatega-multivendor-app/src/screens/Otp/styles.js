import { StyleSheet } from 'react-native'
import { alignment } from '../../utils/alignment'
import { scale } from '../../utils/scaling'

const styles = (props = null) =>
  StyleSheet.create({
    flex: {
      flex: 1
    },
    safeAreaViewStyles: {
      flex: 1,
      backgroundColor: props !== null ? props.themeBackground : 'transparent'
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: props !== null ? props.themeBackground : 'transparent',
      ...alignment.MTlarge
    },
    subContainer: {
      width: '90%',
      height: '100%'
    },
    logoContainer: {
      // width: 120,
      // height: 130,
      // alignSelf: 'center'
    },
    marginTop3: {
      ...alignment.MTxSmall
    },
    marginTop5: {
      ...alignment.MTsmall
    },
    marginTop10: {
      ...alignment.MTlarge
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    errorInput: {
      backgroundColor: props !== null ? props.errorInputBack : '#F7E7E5',
      borderColor: props !== null ? props.errorInputBorder : '#DB4A39'
    },
    btn: {

      position: 'relative',
      // marginTop: '55%',
      width: '100%',
      alignItems: 'center',
      backgroundColor: props !== null ? props.main : '#000',
      alignSelf: 'center',
      padding: scale(15),
      borderRadius: scale(28)
    },
    otpInput: {
      height: 70,
      color: '#000',
      ...alignment.MTlarge
    },
    error: {
      ...alignment.MBlarge
    },
    otpBox: {
      backgroundColor: '#fff',
      color: '#000',
      shadowColor: props !== null ? props.fontSecondColor : '#545454',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 0.84,
      elevation: 2
    },
    headerLeftIcon: {
      ...alignment.PLsmall
    },
    headerRightIcon: {
      ...alignment.PRsmall
    },
    disabledBtn: {
      backgroundColor: props !== null ? props.iconColor : '#333333'
    }
  })
export default styles
