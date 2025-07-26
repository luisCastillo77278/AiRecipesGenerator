import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

const PATH = '/favorites' as const;

const FavoriteButtonTab = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === PATH;

  return (
    <Pressable
      onPress={() => router.navigate(PATH)}
      style={styles.tabButton}
    >
      <Ionicons
        name="heart"
        size={24}
        color={isActive ? 'tomato' : 'gray'}
      />
      <Text style={{ color: isActive ? 'tomato' : 'gray' }}>Favorites</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default FavoriteButtonTab;