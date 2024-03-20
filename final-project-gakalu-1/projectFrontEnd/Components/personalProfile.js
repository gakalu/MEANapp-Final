import React from "react";
import{View,Text} from 'react-native'
function Profile({route:{params}}) {

const[data,setSata]=React.useState([]);
 React.useEffect(()=>{
   
 fetch('http://localhost:3000/users')
 .then(res=>res.json())
 .then(data=>setData(data));
  },[])
  return (
    <View>
    <Text>{data.name}</Text>
      <Text>{data.password}</Text>
      <Text>{data.email}</Text>
      <Text>{data.PhoneNumber}</Text>
     <Text>{data.address}</Text>
    </View>
  );
}
export default Profile;
