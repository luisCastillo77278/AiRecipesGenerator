import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FavoriteButtonTab, PictureButtomTab, SearchButtonTab } from "../../../components/core/ButtonTabs";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          backgroundColor: '#ddd',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarShowLabel: false,
      }}
      tabBar={({ state }) => {
        console.log({ state: state.routes })
        return (
        <View style={styles.tabContainer}>
          {/* Left tab */}
          <SearchButtonTab />

          {/* Center Button */}
          <PictureButtomTab />

          {/* Right tab */}
          <FavoriteButtonTab />
        </View>
      )}}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="favorites" />
   </Tabs>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});

export default TabsLayout;