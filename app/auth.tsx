import SignIn from "@components/SignIn";
import SignUp from "@components/SignUp";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const pageRef = useRef<PagerView | null>(null);

  const handleSignUp = () => {
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
            <SignUp onGoSingIn={handleSignIn} />
          </View>
        </PagerView>
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
});

export default Auth;
