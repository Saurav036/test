import { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../components/Styles";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [pwd, setpwd] = useState("");
  const userRef = useRef("");
  const passWordRef = useRef("");

  useEffect(() => {}, [user, pwd]);

  const userData = {
    userName: "a",
    passWord: "ankit123",
  };

  const onLoginPress = () => {
    if (!user || !pwd) return alert("Please Enter username and password");
    if (
      user.toLowerCase() === userData.userName &&
      pwd.toLowerCase() === userData.passWord
    ) {
      alert("hello ankit");
      return navigation.navigate("Posts",{replace:true});
    }
    alert("wrong credentials");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h}>Test App!</Text>
      <View>
        {/* <Text>ankit is a good boy</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          defaultValue={user}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter password"
          defaultValue={pwd}
          onChangeText={(text) => setpwd(text)}
        />
      </View>
      <Button onChangeAction={onLoginPress} buttonText="Login" />
    </View>
  );
};

export default Login;
