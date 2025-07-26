import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { Alert, Pressable, StyleSheet } from "react-native";

const PictureButtomTab = () => {
  const router = useRouter();

  const handlePicturePress = () => {
    Alert.alert('Selecciona una opción', '', [
      {
        text: 'Tomar foto',
        onPress: async () => {
          const permission = await ImagePicker.requestCameraPermissionsAsync();
          if (permission.granted) {
            const result = await ImagePicker.launchCameraAsync({
              quality: 0.7,
              allowsEditing: true,
              base64: false,
            });

            if (!result.canceled) {
              router.push({
                pathname: '/camera',
                params: { image: result.assets[0].uri },
              });
            }
          }
        },
      },
      {
        text: 'Elegir de galería',
        onPress: async () => {
          const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (permission.granted) {
            const result = await ImagePicker.launchImageLibraryAsync({
              quality: 0.7,
              allowsEditing: true,
              mediaTypes: ['images'],
            });

            console.log('Gallery result:', result);

            if (!result.canceled) {
              router.push({
                pathname: '/camera',
                params: { image: result.assets[0].uri },
              });
            }
          }
        },
      },
      { text: 'Cancelar', style: 'cancel' },
    ]);


    //router.push('/camera');
  }

  return (
    <Pressable
      style={styles.centerButton}
      onPress={handlePicturePress}
    >
      <Ionicons name="camera" size={32} color="white" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  centerButton: {
    width: 65,
    height: 65,
    backgroundColor: 'tomato',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    elevation: 5,
  },
})

export default PictureButtomTab;