const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import StartPage1 from "./screens/StartPage1";
import PersonalCenter from "./screens/PersonalCenter";
import History1 from "./screens/History1";
import LoginRegistrationPage from "./screens/LoginRegistrationPage";
import LoginRegistrationPage1 from "./screens/LoginRegistrationPage1";
import Viewpage2Icon from "./screens/Viewpage2Icon";
import Viewpage2Icon1 from "./screens/Viewpage2Icon1";
import HalamanDepan from "./screens/HalamanDepan";
import ProdukDetail2 from "./screens/ProdukDetail2";
import ProdukDetail1 from "./screens/ProdukDetail1";
import StartPage3 from "./screens/StartPage3";
import StartPage2 from "./screens/StartPage2";
import GroupIcon2 from "./components/Group125";
import GroupComponent from "./components/Group123";
import GroupIcon from "./components/Group140";
import GroupIcon1 from "./components/Group120";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <GroupIcon2 />,
    <GroupComponent />,
    <GroupIcon />,
    <GroupIcon1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <GroupIcon2 />,
    <GroupComponent />,
    <GroupIcon />,
    <GroupIcon1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HalamanDepan"
        component={HalamanDepan}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={History1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PersonalCenter"
        component={PersonalCenter}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LoginRegistrationPage"
        component={LoginRegistrationPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Andika: require("./assets/fonts/Andika.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="StartPage1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartPage1"
              component={StartPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginRegistrationPage1"
              component={LoginRegistrationPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Viewpage2"
              component={Viewpage2Icon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Viewpage21"
              component={Viewpage2Icon1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProdukDetail2"
              component={ProdukDetail2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProdukDetail1"
              component={ProdukDetail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartPage3"
              component={StartPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartPage2"
              component={StartPage2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
