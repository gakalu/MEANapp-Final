import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native-web";
function AddDevice({ navigation }) {
  const [state, setState] = React.useState({
    name: "",
    brand: "",
    price: "",
    installeddate: "",
  });

  const onChangeName = (e) => {
    setState({ name: e.target.value });
  };
  const onChangebrand = (e) => {
    setState({ brand: e.target.value });
  };
  const onChangprice = (e) => {
    setState({ price: e.target.value });
  };
  const onChangeinstalleddate = (e) => {
    setState({ installeddate: e.target.value });
  };
  const addDeviceHandler = () => {
    Alert.alert("Device added sucessfully");
    navigation.navigate("Lists of device");
  };
  return(
    <View>
      <TextInput value={this.name} onChange={onChangeName} name="name" />

      <TextInput value={this.brand} onChange={onChangebrand} name="brand" />

      <TextInput value={this.price} onChange={onChangprice} name="price" />
      <InputText
        value={this.installeddate}
        onChange={onChangeinstalleddate}
        name="installeddate"
      />
      <TouchableOpacity onPress={addDeviceHandler}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AddDevice;
