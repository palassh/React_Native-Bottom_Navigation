import React, {
  useCallback,
  useMemo,
  useRef,
  useContext,
  useState,
} from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomSheet from "@gorhom/bottom-sheet";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { inputName } from "./ThirdScreen";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const Navigator = ({ close }) => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ height: 90 }}
      />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen
        name="ThirdScreen"
        component={(props) => <ThirdScreen close={close} {...props} />}
      />
    </Stack.Navigator>
  );
};

function NavigatorExample(props) {
  console.log(props);
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation();

  const snapPoints = useMemo(() => [0, 500], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleClosePress = useCallback(() => {
    navigation.navigate("FirstScreen");
    bottomSheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Expand" onPress={() => handleExpandPress()} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {props.message}
      </Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        animateOnMount={true}
        onChange={handleSheetChange}
        close={() => handleClosePress()}
      >
        <Navigator close={() => handleClosePress()} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "pink",
  },
});
function mapStateToProps(state) {
  return {
    message: state.sendData.screenData,
  };
}

export default connect(mapStateToProps)(NavigatorExample);
