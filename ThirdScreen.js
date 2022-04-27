import React, { useState, createContext } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { message } from "./services/Actions/Actions";

export const inputName = createContext();

function ThirdScreen(props) {
  // console.log(props)
  const [input, setInput] = useState("");

  function submitHandler() {
    props.setMessage(input);
    props.close();
  }

  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "white" }}>
      <View style={styles.textAreaStyle}>
        <TextInput
          placeholder="Type Here...."
          onChangeText={(value) => setInput(value)}
        />
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={submitHandler}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textAreaStyle: {
    borderWidth: 1.5,
    borderColor: "black",
    padding: 10,
    width: 200,
    borderRadius: 30,
    marginTop: 20,
  },
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
function mapDispatchToProps(dispatch) {
  return {
    setMessage: (value) => dispatch(message(value)),
  };
}
export default connect(null, mapDispatchToProps)(ThirdScreen);
