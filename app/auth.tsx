import SignIn from "@components/SignIn";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const pageRef = useRef<PagerView | null>(null);

  const handleSignUp = () => {
    console.log('sign up');
    pageRef.current?.setPage(1)
  }

  const handleSignIn = () => {
    pageRef.current?.setPage(0);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PagerView 
          ref={pageRef}
          style={styles.slideView} 
          scrollEnabled={false}
        >
          <View key={0}>
            <SignIn onGoSingUp={handleSignUp} />
          </View>
          <View key={1}>
            <Text>sign up</Text>
          </View>
        </PagerView>

        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={styles.buttonTab} onPress={handleSignIn}>
            <Text>sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTab} onPress={handleSignUp}>
            <Text>sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  slideView: {
    flex: 1,
  },
  buttonsGroup: {
    flexDirection: 'row',
    columnGap: 10,
    padding: 5,
  },
  buttonTab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'cyan',
    flexGrow: 1
  }

});

export default Auth;
