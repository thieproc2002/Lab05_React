import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function MainScreen({ navigation }) {
  const navigationPickColor = useNavigation();
  const route = useRoute();
  const [selectedColor, setSelectedColor] = useState("blue");

  useEffect(() => {
    if (route.params) {
      const { selectedColor } = route.params;
      setSelectedColor(selectedColor);
    }
  }, [route.params]);

  const colorImage = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
  };

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    imgPhone: {
      width: "80%",
      height: "60%",
      marginTop: 0,
    },
    containerInfo: {
      marginTop: 10,
      flexDirection: "row",
    },
    textNamePhone: {
      fontFamily: "Roboto",
      fontSize: 17,
      fontWeight: "bold",
    },
    groupStar: {
      flex: 1,
      flexDirection: "row",
    },
    star: {
      width: 23,
      height: 25,
      marginTop: -5,
    },
    containerPrice: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontFamily: "Roboto",
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 10,
    },
    txtOriginalPrice: {
      opacity: 0.4,
      textDecorationLine: "line-through",
    },
    containerSlogan: {
      marginTop: 10,
      flexDirection: "row",
    },
    txtSlogan: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
    },
    imgDetail: {
      width: 20,
      height: 20,
      left: 10,
      top: 2,
    },
    buttonPickColor: {
      width: "100%",
      height: 50,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "black",
      marginTop: 10,
      borderRadius: 10,
    },
    txtChooseColor: {
      fontFamily: "Roboto",
      fontSize: 20,
      color: "black",
    },
    buttonBuy: {
      width: "100%",
      height: 50,
      backgroundColor: "#EE0A0A",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#CA1536",
      marginTop: 10,
      borderRadius: 5,
    },
    txtBuy: {
      fontFamily: "Roboto",
      fontSize: 30,
      color: "white",
    },
  });

  const navigationToPickColor = () => {
    navigationPickColor.navigate("PickColor");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgPhone} source={colorImage[selectedColor]} />
      <View>
        <Text style={styles.textNamePhone}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.containerInfo}>
          <View style={styles.groupStar}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Image
                key={index}
                style={styles.star}
                source={require("./assets/star.png")}
              />
            ))}
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text>1.790.000 đ</Text>
          <Text style={styles.txtOriginalPrice}>1.790.000 đ</Text>
        </View>
        <View style={styles.containerSlogan}>
          <Text style={styles.txtSlogan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image
            style={styles.imgDetail}
            source={require("./assets/Group 1.png")}
          />
        </View>
        <TouchableHighlight
          style={styles.buttonPickColor}
          onPress={() => navigation.navigate('Screen2')}
        >
          <Text style={styles.txtChooseColor}>4 MÀU-CHỌN MÀU</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonBuy}>
          <Text style={styles.txtBuy}>CHỌN MUA</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
