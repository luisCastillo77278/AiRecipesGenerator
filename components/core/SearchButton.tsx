import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Search = () => {
  const router = useRouter();

  const handleSearch = () => {
    router.push('/search');
  };

  return (
    <TouchableOpacity onPress={handleSearch} style={styles.container}>
      <Ionicons name="search" size={20} color="gray" />
      <Text style={styles.text}>Search any event...</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Search;
