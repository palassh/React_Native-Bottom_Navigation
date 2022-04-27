import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function SecondScreen(props) {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => props.navigation.navigate("ThirdScreen")}
      >
        <Text style={styles.panelButtonTitle}>Move to Third Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
