import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Dashboard = ({ navigation, route: { params } }) => {
  const user = params.name;

  React.useEffect(() => {
    navigation.setOptions({ title: user.name });
  });
  const PersonalProfileHandler = () => navigation.navigate("Personal profile");

  const DeviceListsHandler = () => navigation.navigate("Lists of device");

  const NotesHandler = () => navigation.navigate("Daily Notes");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "http://www.thaigoodview.com/files/u102358/Home.png" }}
      />
      <br />
      <TouchableOpacity onPress={PersonalProfileHandler}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <br />
      <TouchableOpacity onPress={DeviceListsHandler}>
        <Text style={styles.buttonText}>List of Devices</Text>
      </TouchableOpacity>
      <br />
      <TouchableOpacity onPress={NotesHandler}>
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    align: "center",
    backgroundColor: "gray",
    padding: 10,
    hight: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicBox: {
    flex: 2,
  },
  box: {
    flex: 0.5,
    padding: 2,
    justifyContent: "right",
    alignItems: "right",
  },
  image: {
    flex: 1,
    align: "center",
    height: 50,
    width: 100,
    padding: 200,
  },
  buttonText: {
    fontSize: 26,
    align: "center",
    backgroundColor: "black",
    width: 500,
    height: 50,
    color: "white",
  },
});
export default Dashboard;
