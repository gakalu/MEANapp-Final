import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListOfDevice from "./Components/DeviceLists";
import Profile from "./Components/PersonalProfile";
import Notes from "./Components/Notes";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import addDevice from './Components/addDevice'
import globalContext from "./GlobalContext";
import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerTitleAlign: "center" }}
      ></Stack.Screen>
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ title: "Signup", headerTitleAlign: "center" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Lists of device" component={ListOfDevice} />
      <Stack.Screen name="Daily Notes" component={Notes} />
      <Stack.Screen name="Personal profile" component={Profile} />
      <Stack.Screen name="AddDevice" component={addDevice} />
    </Stack.Navigator>
  );
}
function App() {
  const [state, setState] = React.useState({ user: null });

  async function getData() {
    try {
      const value = await AsyncStorage.getItem("project");
      if (value !== null) {
        const user = JSON.parse(value);
        setState((init) => ({ ...init, user }));
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <globalContext.Provider value={{ state, setState }}>
      <NavigationContainer>
        {state.user === null ? <Auth /> : <MyStack />}
      </NavigationContainer>
    </globalContext.Provider>
  );
}
export default App;
