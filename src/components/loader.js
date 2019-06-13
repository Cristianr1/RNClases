import React from 'react'
import { SafeAreaView, Image, StatusBar } from 'react-native';
import styles from 'cascos/src/stylesheets/loader'

Loader = (props) => {
return(
    <SafeAreaView style={styles.container}>
    <StatusBar hidden={true} />
      <Image source={require('cascos/src/assets/image.png')} style={styles.logo}/>
  </SafeAreaView>
)
}

export default Loader