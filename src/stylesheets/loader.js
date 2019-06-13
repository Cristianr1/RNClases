import { StyleSheet } from 'react-native'
import Colors from 'cascos/src/helpers/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
      }     
})