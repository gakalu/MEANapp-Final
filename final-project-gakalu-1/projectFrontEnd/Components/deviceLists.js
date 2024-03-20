import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";
function ListOfDevice({ navigation, route: { params } }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/devices")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteHandler = (id) => {
    React.useEffect(() => {
      fetch("http://localhost:3000/devices/:_id")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return data.filter((item) => item._id !== id);
  };
  const editHandler = (id) => {
    React.useEffect(() => {
      fetch("http://localhost:3000/devices/:_id")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    navigation.navigate("addDevice");
  };
  return (
    <View>
      {data.map((item) => {
        {
          item.name;
        }
        {
          item.installeddate;
        }
        (
          <TouchableOpacity onPress={deleteHandler}>
            <Text>Delete</Text>
          </TouchableOpacity>
        ),
          (
            <TouchableOpacity onPress={editHandler}>
              <Text>Edit</Text>
            </TouchableOpacity>
          );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 30,
  },
});
export default ListOfDevice;
