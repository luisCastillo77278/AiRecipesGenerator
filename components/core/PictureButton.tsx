import { Ionicons } from '@expo/vector-icons';
import { usePhoto } from '@store/photoStore';
import useTheme from '@theme/useTheme';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { Alert, AlertButton, Pressable, StyleSheet } from 'react-native';

const PictureButtomTab = () => {
  const router = useRouter();
  const { addPhoto } = usePhoto();
  const { paletteColors } = useTheme();

  const handlePicturePress = () => {
    const buttons: AlertButton[] = [
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
                pathname: '/modal',
                // params: { image: JSON.stringify(result.assets[0].uri )},
              });
              addPhoto(result.assets[0].uri);
            }
          }
        },
      },
      {
        text: 'Elegir de galería',
        onPress: async () => {
          const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (permission.granted) {
            const result = await ImagePicker.launchImageLibraryAsync({
              quality: 0.7,
              allowsEditing: true,
              mediaTypes: ['images'],
            });

            console.log('Gallery result:', result);

            if (!result.canceled) {
              router.push({
                pathname: '/modal',
                // params: { image: result.assets[0].uri },
              });
              addPhoto(result.assets[0].uri);
            }
          }
        },
      },
      { text: 'Cancelar', style: 'cancel' },
    ];

    Alert.alert('Selecciona una opción', '', buttons, { cancelable: true });
  };

  return (
    <Pressable
      style={[
        styles.centerButton,
        { backgroundColor: paletteColors.primary.DEFAULT },
      ]}
      onPress={handlePicturePress}
    >
      <Ionicons name="add" size={32} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centerButton: {
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 55,
    elevation: 5,
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.2)`,
  },
});

export default PictureButtomTab;
