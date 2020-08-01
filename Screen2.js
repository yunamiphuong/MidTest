import React from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import mountain2 from "./assets/mountain2.jpg";

export default function Screen2() {
  return (
    <View style={styles.containerView}>
      <ImageBackground source={mountain2} style={styles.backgroundImage} />
      {/* // header */}
      <View style={styles.headerView}>
        <TouchableOpacity>
          <FontAwesome5 name="home" color="white" size={25} />
        </TouchableOpacity>

        <Text style={styles.moreCatText}>MORE CATEGORIES</Text>
        <TouchableOpacity>
          <Text style={styles.restoreText}>restore</Text>
        </TouchableOpacity>
      </View>

      {/* body */}
      <View style={styles.bodyView}>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.logoNameButtonView}>
            <View style={[styles.logoView, styles.logoColor1]}>
              <FontAwesome5 name="car" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>Cars</Text>
          </View>
          <Text style={styles.costText}>$15</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <View style={styles.logoNameButtonView}>
            <View style={[styles.logoView, styles.logoColor2]}>
              <FontAwesome5 name="dumbbell" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>Sports</Text>
          </View>
          <Text style={styles.costText}>$10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.logoNameButtonView}>
            <View style={[styles.logoView, styles.logoColor3]}>
              <FontAwesome5 name="user-friends" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>People</Text>
          </View>
          <Text style={styles.costText}>$8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.logoNameButtonView}>
            <View style={[styles.logoView, styles.logoColor4]}>
              <FontAwesome5 name="home" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>Cities</Text>
          </View>
          <Text style={styles.costText}>$5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  //   header
  headerView: {
    // backgroundColor: "red",
    flex: 1 / 8,
    justifyContent: "space-around",
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  moreCatText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  restoreText: {
    color: "white",
  },
  //   body
  bodyView: {
    flex: 1 / 2,
    paddingHorizontal: 30,
  },
  logoNameButtonView: {
    // backgroundColor: "white",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },

  button1: {
    marginVertical: 5,
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 40,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  logoView: {
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 5,
    // align icon inside:
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "white",
  },

  logoColor1: {
    backgroundColor: "#03a9f4",
  },
  logoColor2: {
    backgroundColor: "#ff5722",
  },
  logoColor3: {
    backgroundColor: "#9c27b0",
  },
  logoColor4: {
    backgroundColor: "#64ba64",
  },
  buttonText: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  costText: {
    fontSize: 18,
  },
});
