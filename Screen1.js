import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import mountain from "./assets/mountain.jpg";

export default function Screen1() {
  return (
    <View style={styles.containerView}>
      <ImageBackground source={mountain} style={styles.backgroundImage} />
      {/* // header */}
      <View style={styles.headerView}>
        <Text style={styles.quizText}>QUIZ</Text>
      </View>

      {/* body options */}
      <View style={styles.bodyView}>
        <View style={styles.bodyButtonView}>
          <TouchableOpacity style={styles.button1}>
            <View style={[styles.logoView, styles.logoColor1]}>
              <FontAwesome5 name="list-ul" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>Play quiz</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bodyButtonView}>
          <TouchableOpacity style={styles.button1}>
            <View style={[styles.logoView, styles.logoColor2]}>
              <FontAwesome5 name="user-friends" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>Multiplayer 1 to 1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bodyButtonView}>
          <TouchableOpacity style={styles.button1}>
            <View style={[styles.logoView, styles.logoColor3]}>
              <FontAwesome5 name="crop-alt" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>More categories</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bodyButtonView}>
          <TouchableOpacity style={styles.button1}>
            <View style={[styles.logoView, styles.logoColor4]}>
              <FontAwesome5 name="chart-bar" style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>World score</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footerView}>
        <View style={styles.settingAboutButtonView}>
          <FontAwesome5 name="cog" size={15} color="white" />
          <Text style={styles.footerTexts}>Settings</Text>
        </View>
        <View style={styles.settingAboutButtonView}>
          <FontAwesome5 name="info-circle" size={15} color="white" />
          <Text style={styles.footerTexts}>About</Text>
        </View>
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
    flex: 1 / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  quizText: {
    fontSize: 40,
    color: "#fff",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  //   body
  bodyView: {
    flex: 1 / 2,
    paddingHorizontal: 30,
  },
  bodyButtonView: {
    justifyContent: "center",
    // alignItems: "center"
    // backgroundColor: "black"
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

  // footer
  footerView: {
    paddingHorizontal: 100,
    // backgroundColor: "#fff",
    flex: 1 / 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  settingAboutButtonView: {
    marginVertical: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  footerTexts: {
    color: "white",
    fontSize: 15,
    marginHorizontal: 5,
  },
});
