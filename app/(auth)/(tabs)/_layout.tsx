import ButtonTab from '@components/core/ButtonTab';
import PictureButtomTab from '@components/core/PictureButton';
import useTheme from '@theme/useTheme';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const TabsLayout = () => {
  const { paletteColors } = useTheme();

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
      tabBar={({ state, navigation }) => {
        return (
          <View
            style={[
              styles.tabContainer,
              {
                backgroundColor: paletteColors.background,
              },
            ]}
          >
            <ButtonTab
              iconName="search"
              text="Search"
              color={state.index === 0 ? paletteColors.primary.DEFAULT : 'gray'}
              onPress={() => navigation.navigate('index')}
            />

            <PictureButtomTab />

            <ButtonTab
              iconName="heart"
              text="Favorites"
              color={state.index === 1 ? paletteColors.primary.DEFAULT : 'gray'}
              onPress={() => navigation.navigate('favorites')}
            />
          </View>
        );
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="favorites" />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    elevation: 5,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default TabsLayout;
