import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function PickColor() {
  const [currentColor, setCurrentColor] = useState("blue");
  const navigation = useNavigation();

  const colorInfoText = {
    blue: "xanh",
    red: "đỏ",
    black: "đen",
    silver: "bạc",
  };

  const colorImage = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    infoContainer: {
      flexDirection: "row",
      backgroundColor: "#fff",
      height: "28%",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    imgPhone: {
      width: 140,
      height: 160,
      margin: 5,
    },
    txtPhoneName: {
      fontFamily: "roboto",
      fontSize: 15,
      margin: 5,
    },
    colorInfo: {
      margin: 5,
    },
    colorInfoText: {
      fontFamily: "roboto",
      fontSize: 15,
      margin: 5,
    },
    colorContainer: {
      backgroundColor: "#C4C4C4",
      width: "100%",
      height: "72%",
    },
    txtPickColor: {
      fontFamily: "roboto",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5,
    },
    color: {
      flex: 4,
      gap: 10,
      alignItems: "center",
      marginTop: 10,
    },
    colorBox: {
      width: 80,
      height: 80,
    },
    buttonComplete: {
      width: "90%",
      height: 50,
      backgroundColor: "#1952E294",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#CA1536",
      marginTop: 10,
      borderRadius: 5,
      alignSelf: "center",
      marginVertical: 10,
    },
    txtComplete: {
      fontFamily: "Roboto",
      fontSize: 30,
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.imgPhone} source={colorImage[currentColor]} />
        <View style={styles.textInfo}>
          <Text style={styles.txtPhoneName}>
            Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
          </Text>
          <View style={styles.colorInfo}>
            <Text style={styles.colorInfoText}>
              Màu:
              <Text
                style={{
                  fontWeight: "bold",
                  fontFamily: "roboto",
                  fontSize: 15,
                  margin: 5,
                }}
              >
                {colorInfoText[currentColor]}
              </Text>
            </Text>
            <Text style={styles.colorInfoText}>
              Cung cấp bởi <b>Tiki Tradding</b>
            </Text>
            <Text style={styles.colorInfoText}>
              <b>1.790.000 đ</b>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.colorContainer}>
        <Text style={styles.txtPickColor}>Chọn một màu bên dưới:</Text>
        <View style={styles.color}>
          {["silver", "red", "black", "blue"].map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorBox, { backgroundColor: color }]}
              onPress={() => handleColorChange(color)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.buttonComplete}
          onPress={() => {
            navigation.navigate("Screen1", { selectedColor: currentColor });
          }}
        >
          <Text style={styles.txtComplete}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}