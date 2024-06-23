/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Navigation } from 'react-native-navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settings} />
      <View>
        {/* profile elements */}
        <View style={styles.profileBg} />
        <View style={styles.profilePic} />
        <Text style={styles.profileText}>
          <Text style={{fontWeight: "bold"}}>UserName - </Text>
          <Text>FName</Text>
        </Text>
        <View style={{
          flexDirection: 'row',
          left: 100,
          alignSelf: 'stretch',
        }}>
          <Text style={styles.follow}>X{"\n"}Followers</Text>
          <Text style={styles.follow}>Y{"\n"}Following</Text>
          <View style={{
            paddingHorizontal: 20,
          }}/>
          <View style={styles.externalLinks}/>
          <View style={styles.externalLinks}/>
        </View>
        <View style={styles.bio}>
          <Text style={{
            fontSize: 12,
            color: 'white',
          }}>Hi my name is ander dingus and i like fortnite and edging</Text>
        </View>
        <View style={styles.editprofile}>
          <Text style={{
            fontSize: 15,
            color: 'white',
          }}>Edit Profile</Text>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          padding: 10,
        }}>Hi</Text>
      </View>
      <View style={styles.categories}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          padding: 10,
        }}>Bye</Text>
      </View>
      <View style={styles.dashboard}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
    margin: 10,
  },
  profileBg: {
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    padding: 10,
    width: 'auto',
    height: 150,
    alignSelf: "stretch",
  },
  profilePic: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
    position: 'absolute',
    top: 75,
    left: 5,
    borderRadius: 10,
    zIndex: 2,
  },
  profileText: {
    position: "absolute",
    color: 'red',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    fontSize: 20,
    top: 105,
    left: 95,
    padding: 7,
  },
  follow: {
    color: 'purple',
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  externalLinks: {
    borderRadius: 50,
    width: 35,
    height: 35,
    backgroundColor: 'orange',
    marginVertical: 5,
    marginHorizontal: 3,
    alignSelf: 'flex-end',
  },
  bio: {
    borderRadius: 10,
    backgroundColor: 'coral',
    padding: 10,
    width: 'auto',
    height: 55,
    alignSelf: "stretch",
  },
  editprofile: {
    borderStyle: 'solid',
    borderColor: 'blue',
    alignSelf: 'flex-end',
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 5,
    marginVertical: 10,
  },
  categories: {
    backgroundColor: 'teal',
    width: "auto",
    alignSelf: "stretch",
    marginVertical: 2,
    height: 150,
  },
  dashboard: {
    alignSelf: 'stretch',
    backgroundColor: 'pink',
    height: 50,
    marginTop: "auto",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    zIndex: 3,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  icon: {
    marginTop: 10,
    width: 30,
    height: 30,
    backgroundColor: 'blue',
  },
});

export default App;
