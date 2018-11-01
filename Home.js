import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default ({ history }) => (
  <View style={styles.container}>
    <Button title="Mapa Base" onPress={() => history.push("/products")} />
    <Text>{`\n`}</Text>
    <Button title="Manifesto" onPress={() => history.push("/manifesto")} />
  </View>

);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212f3f",
    alignItems: "center",
    justifyContent: "center"
  }
});