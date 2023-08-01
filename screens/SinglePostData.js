import { useEffect, useRef, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../components/Styles";
import Button from "../components/Button";
import Card from "../components/Card";

const PostData = ({ route, navigation }) => {
    const { id } = route.params
const [data, setSinglePost] = useState()

useEffect(()=>{
    return ()=>setSinglePost()
},[])

useEffect(()=>{
getPostById(id)


}, [id])


const getPostById =async(id)=>{
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url);
      const data = await response.json();
     if(data){setTimeout(()=>{
         setSinglePost(data)

     }, 1000)} 
    return data
  }
  const truncateStr = (str, length) => {
    return str?.substring(0, length) + "...";
  };
  
  return (
    <ScrollView>
      <View style={{...styles.container,height:700}}>
       {data? <Card style={{backgroundColor:'white'}}>
              <Text style={{ padding: 20, fontSize: 26, fontWeight:500,padding: 20 }}>User ID : {data?.userId}</Text>
              <Text style={{ padding: 20, fontSize: 26, fontWeight:500,padding: 20 }}>Id :{data?.id}</Text>
        <Text style={{ padding: 20, fontSize: 26, fontWeight:500,  }}>
                Title: {truncateStr(data?.title, 18)}
              </Text>

              <Text style={{ padding: 20 }}>{data?.body}</Text>
        </Card>
        :<Text>Loading data...</Text>}
        
        {/* <Button onChangeAction={onLoginPress} buttonText='Login' /> */}
      </View>
    </ScrollView>
  );
};

export default PostData;
