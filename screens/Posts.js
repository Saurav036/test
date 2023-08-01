import { useEffect, useRef, useState, useCallback } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { styles } from "../components/Styles";
import Card from "../components/Card";

const Posts = ({ navigation }) => {
  let url ="https://jsonplaceholder.typicode.com/posts"
  const [posts, setPosts] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getDataFromUrl(url);
  }, []);

  const getDataFromUrl = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) setPosts(data);
    } catch (err) {
      alert(err);
      setPosts([]);
    }
  };

  const onRefresh = useCallback(() => {
    setPosts();
    getDataFromUrl(url);
  }, []);

  const goToPost = (id) => {
    navigation.navigate("SinglePost", { id });
  };

  const truncateStr = (str, length) => {
    return str.substring(0, length) + "...";
  };

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.h}>All Posts</Text>
          {posts ? (
            posts?.map((p) => (
              <Card
                style={{
                  // height: 100,
                  width: "100%",

                  backgroundColor: "#C4E9FB",
                  justifyContent: "center", 
                  alignItems: "center", 
                  marginBottom: 50,
                }}
                key={p?.id}
              >
                <TouchableOpacity
                  style={{
                    // height: 100,
                    width: "100%",
                  }}
                  onPress={() => goToPost(p.id)}
                >
                  <Text style={{ padding: 20, fontSize: 26, fontWeight: 500 }}>
                    Title: {truncateStr(p.title, 18)}
                  </Text>

                  <Text style={{ padding: 20 }}>{p.body}</Text>
                </TouchableOpacity>
              </Card>
            ))
          ) : (
            <View>
              <Text>Fetching Data</Text>
            </View>
          )}
          {/* <Button onChangeAction={onLoginPress} buttonText='Login' /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;
