import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import AdminScreen from "./src/screens/AdminScreen";
import UserScreen from "./src/screens/UserScreen";
import HappyList from "./src/screens/HappyList";
import SadList from "./src/screens/SadList";
import CreateHappyList from "./src/screens/CreateHappyList";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="HappyList" component={HappyList} />
        <Stack.Screen name="SadList" component={SadList} />
        <Stack.Screen name="CreateHappyList" component={CreateHappyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
