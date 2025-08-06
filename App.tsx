import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//eas build —platform android —profile development
// eas build —platform android —profile production
// eas build —platform android —profile preview

// eas build --profile development
// eas build --profile preview

// que sea un proyecto funcional
// con variables de entorno que por lo menos tenga login
// con usuario y contraseña de prueba 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
