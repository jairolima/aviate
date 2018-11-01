import React from "react";
import {Platform, View, StyleSheet, Text, Button, Dimensions, WebView } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

type Props = {};

export default ({ history }) => (
  <View style={{flex:1, marginTop: 20}}>
  <Button title="voltar" onPress={() => history.push("/")} />
  <WebView
   style={styles.webview}
   source={{uri: 'http://www.aviate.pro/manifesto.html'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={false}
   scalesPageToFit={true} />
  </View>
);


const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: "gray",
    width: deviceWidth,
    height: deviceHeight
  }
});