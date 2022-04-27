import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./services/Reducer/Index";
import Dashboard from "./Dashboard";
import { NavigationContainer } from "@react-navigation/native";
const store = createStore(rootReducer);
console.log("store", store.getState());

export default function NavigatorExample() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Dashboard />
      </NavigationContainer>
    </Provider>
  );
}
