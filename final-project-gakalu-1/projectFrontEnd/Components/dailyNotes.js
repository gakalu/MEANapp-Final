import React from "react";
import { View, Text } from "react-native";
function Notes() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <View>
       {data.notes.map((item)=><Text>item</Text>)} 
      <Text>Notes</Text>
    </View>
  );
}
export default Notes;
