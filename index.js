// In index.js of a new project
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Navigation } from "react-native-navigation";

let bannerColor = "white";
let previousColor = "white";
let selected = true;

// Home screen declaration
const HomeScreen = (props) => {
  const [settingsVisible, setElementVisible] = useState(false);
  const [visible, hideSettings] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {settingsVisible ? (
          <View style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
            <TouchableOpacity onPress={() => {
              setElementVisible(!settingsVisible);
              hideSettings(!visible);
              bannerColor = previousColor;
            }}>
              <Text style={{
                fontSize: 20,
                color: "white",
                padding: 17.5,
              }}>Cancel</Text>
            </TouchableOpacity>
            <Text style={{
              fontSize: 30,
              color: "white",
              fontWeight: "bold",
              padding: 10,
            }}>Edit Profile</Text>
            <TouchableOpacity onPress={() => {
              setElementVisible(!settingsVisible);
              hideSettings(!visible);
              previousColor = bannerColor;
            }}>
              <Text style={{
                fontSize: 20,
                color: "white",
                padding: 17.5,
              }}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : <View style={{ padding: 29.5 }} />}


        {visible ? (
          <View style={styles.settings} />
        ) : null}

        <View>
          {/* profile elements */}
          <View style={[styles.profileBg, { backgroundColor: bannerColor }]}>
            {settingsVisible ? (
              <TouchableOpacity style={styles.editIcon} onPress={() => Navigation.push(props.componentId, {
                component: {
                  name: "Settings",
                  options: {
                    topBar: {
                      backButton: {
                        popStackOnPress: false,
                      },
                      title: {
                        text: "Choose Banner",
                      },
                    },
                  },
                },
              })}>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.profilePic} />
          <Text style={styles.profileText}>
            <Text style={{ fontWeight: "bold" }}>UserName - </Text>
            <Text>FName</Text>
          </Text>
          <View style={{
            flexDirection: "row",
            left: 100,
            alignSelf: "stretch",
          }}>
            <Text style={styles.follow}>X{"\n"}Followers</Text>
            <Text style={styles.follow}>Y{"\n"}Following</Text>
            <View style={{
              paddingHorizontal: 20,
            }} />
            <View style={styles.externalLinks} />
            <View style={styles.externalLinks} />
          </View>
          <View style={styles.bio}>
            <Text style={{
              fontSize: 12,
              color: "white",
            }}>Hi my name is ander dingus and i like cars vroom</Text>
          </View>

          {visible ? (
            <TouchableOpacity style={styles.editProfile} onPress={() => {
              setElementVisible(!settingsVisible);
              hideSettings(!visible);
              // console.log(bannerColor);
            }}>
              <Text style={{
                fontSize: 15,
                color: "white",
              }}>Edit Profile</Text>
            </TouchableOpacity>
          ) : <View style={{ padding: 25.5 }} />}

        </View>
        <View style={styles.categories}>
          <Text style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            padding: 10,
          }}>Hi</Text>
          {settingsVisible ? (
            <View style={styles.editIcon} />
          ) : null}
        </View>
        <View style={styles.categories}>
          <Text style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            padding: 10,
          }}>Bye</Text>
          {settingsVisible ? (
            <View style={styles.editIcon} />
          ) : null}
        </View>
      </ScrollView>
      <View style={styles.dashboard}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};
HomeScreen.options = {};

// Settings screen declaration - this is the screen we'll be pushing into the stack
const SettingsScreen = (props) => {

  const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'RNN.back' && !selected) {
      discardChanges();
    } else if (buttonId === 'RNN.back' && selected) {
      Navigation.popToRoot(props.componentId);
    }
  });

  const discardChanges = () =>
    Alert.alert('Discard Changes', 'Are you sure you want to discard changes?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => {
          Navigation.popToRoot(props.componentId);
          bannerColor = previousColor;
          selected = true;
        }},
    ]);

  //const [isPressed, setPress] = useState(selected);
  //const [applied, setChanges] = useState(false);
  const [backgroundColor, setBackground] = useState(bannerColor);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/*<View style={{ padding: 29.5 }} />*/}
        <View>
          <View style={[styles.profileBg, { backgroundColor }]} />
          <View style={styles.profilePic} />
          <Text style={styles.profileText}>
            <Text style={{ fontWeight: "bold" }}>UserName - </Text>
            <Text>FName</Text>
          </Text>
          <View style={{ padding: 10 }} />
        </View>
        <PreviewLayout
          selectedValue={backgroundColor}
          values={[
            "red",
            "lime",
            "blue",
            "orange",
            "purple",
            "yellow",
          ]}
          setSelectedValue={setBackground}
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: 30,
            width: 200,
            height: 200,
            backgroundColor: "yellow",
          }}>
        </PreviewLayout>
      </ScrollView>
      <View style={styles.dashboard2}>
        <TouchableOpacity disabled={selected} style={selected ? styles.applyDisabled : styles.apply} onPress={() => {
          bannerColor = backgroundColor;
          selected = true;
        }}>
          <Text style={{ fontSize: 20, color: "white", textAlign: "center", padding: 10 }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const PreviewLayout = ({
                         values,
                         selectedValue,
                         setSelectedValue,
                       }) => (
  <View style={{ padding: 10, flex: 1 }}>
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => {
            {
              setSelectedValue(value);
              selected = false;
            }
          }}
          style={[styles.banner, selectedValue === value && styles.bannerHighlighted]}>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

Navigation.registerComponent("Home", () => HomeScreen);
Navigation.registerComponent("Settings", () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Home",
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    width: 30,
    height: 30,
    backgroundColor: "blue",
    alignSelf: "flex-end",
    position: "absolute",
    right: 20,
    top: 15,
  },
  profileBg: {
    borderRadius: 10,
    backgroundColor: "aliceblue",
    padding: 10,
    width: "auto",
    height: 150,
    alignSelf: "stretch",
  },
  profilePic: {
    width: 90,
    height: 90,
    backgroundColor: "green",
    position: "absolute",
    top: 75,
    left: 5,
    borderRadius: 10,
    zIndex: 2,
  },
  profileText: {
    position: "absolute",
    color: "red",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    fontSize: 20,
    top: 105,
    left: 95,
    padding: 7,
  },
  follow: {
    color: "purple",
    fontSize: 13,
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  externalLinks: {
    borderRadius: 50,
    width: 35,
    height: 35,
    backgroundColor: "orange",
    marginVertical: 5,
    marginHorizontal: 3,
    alignSelf: "flex-end",
  },
  bio: {
    borderRadius: 10,
    backgroundColor: "coral",
    padding: 10,
    width: "auto",
    height: 55,
    alignSelf: "stretch",
  },
  editProfile: {
    borderStyle: "solid",
    borderColor: "blue",
    alignSelf: "flex-end",
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 5,
    marginVertical: 10,
  },
  categories: {
    backgroundColor: "teal",
    width: "auto",
    alignSelf: "stretch",
    marginVertical: 2,
    height: 150,
    flexDirection: "column",
  },
  dashboard: {
    alignSelf: "stretch",
    backgroundColor: "pink",
    height: 50,
    marginTop: "auto",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    zIndex: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  icon: {
    marginTop: 10,
    width: 30,
    height: 30,
    backgroundColor: "crimson",
  },
  editIcon: {
    width: 30,
    height: 30,
    backgroundColor: "coral",
    alignSelf: "flex-end",
    margin: 10,
    position: "absolute",
    right: 0,
  },
  banner: {
    margin: 5,
    borderRadius: 10,
    width: 150,
    height: 50,
    backgroundColor: "violet",
    alignSelf: "center",
  },
  bannerHighlighted: {
    margin: 5,
    borderRadius: 10,
    width: 150,
    height: 50,
    backgroundColor: "violet",
    borderWidth: 3,
    borderColor: "white",
  },
  container2: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    flexDirection: "row",
  },
  dashboard2: {
    alignSelf: "stretch",
    backgroundColor: "lightgray",
    height: 70,
    marginTop: "auto",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    zIndex: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderColor: "blue",
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5,
  },
  apply: {
    backgroundColor: "blue",
    borderRadius: 10,
    width: 90,
    height: 50,
    alignSelf: "center",
  },
  applyDisabled: {
    backgroundColor: "gray",
    borderRadius: 10,
    width: 90,
    height: 50,
    alignSelf: "center",
  },
});
