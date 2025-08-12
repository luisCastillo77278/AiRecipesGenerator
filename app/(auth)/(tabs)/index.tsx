import Button from '@components/common/Button';
import SearchButton from '@components/core/SearchButton';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuth from '../../../auth/useAuth';

const Home = () => {
  const { SignOut } = useAuth();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={[styles.container]}>
        <SearchButton />

        <Link
          href="/modal"
          style={{
            padding: 20,
            backgroundColor: 'red',
            color: 'white',
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          Open modal
        </Link>

        <Button
          onPress={SignOut}
          text="Sign out"
          width="50%"
          bgColor="red"
          color="white"
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
