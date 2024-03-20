import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { View, Text } from "react-native";
import { useState } from "react/cjs/react.production.min";
import globalContext from "../GlobalContext";
function Login({ navigation, route: { params } }) {
  const [data, setData] = useState({ userName: "", password: "" });
  const { state, setState } = useContext(globalContext);
  const loginHandler = () => {
    React.useEffect(() => {
      fetch("http://localhost:3000/user/Login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/jsson",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => setData(data));
      Alert.alert("Login succesfully"), navigation.navigate("Dashboard");
    }, []);
    AsyncStorage.setItem("project", JSON.stringify({data}));
    setState({ ...data, user: { username: data.UserName } });
    setState({ ...data, user: { username: data.password } });
  };
  return (
    <SafeAreaView>
      <TextInput
        UserName
        style={styles.input}
        placeholder="UserName"
        onChange={(val) => setData.UserName(val)}
        value={UserName}
      />
      <TextInput
        PassWord
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChange={(val) => setData.password(val)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text>Login</Text>
      </TouchableOpacity>
      <br />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("signup")}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  button: {
    margin: 12,
    borderWidth: 1,
    width: 50,
  },
});
export default Login;
