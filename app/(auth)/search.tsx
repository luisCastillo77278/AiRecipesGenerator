import TextField from '@components/common/Forms/TextField';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => setSearchText('');

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text>Search</Text>
        <TextField
          value={searchText}
          onChangeText={setSearchText}
          brWidth={0}
          elevation={5}
          brColor="gray"
          brRadius={20}
          paddingX={10}
          paddingY={0}
          name="search"
          placeholder="Search any event..."
          isIcon
          iconName="search"
          iconAction={() => (
            <TouchableOpacity style={styles.button} onPress={handleClear}>
              <Ionicons name="close-circle" size={20} color="gray" />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  button: {
    padding: 8,
  },
});

export default Search;
