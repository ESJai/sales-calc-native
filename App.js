import React, {Component} from 'react';
import Main from './components/Main.js';
import { Platform, StatusBar, SafeAreaView, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: "#fff"
  },

  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default class App extends Component {


  render() {
    return(
      <SafeAreaView style={styles.main}>
        <View style={styles.container}/>
        <Main/>
      </SafeAreaView>
      
      
    )
  }
}