import Button from '@components/common/Button';
import { usePhoto } from '@store/photoStore';
import useTheme from '@theme/useTheme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Modal = () => {
  const router = useRouter();
  const { photo } = usePhoto();
  const { paletteColors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleDetectIngredients = async () => {
    setLoading(true);
    try {
      // Simulación: Llamada a IA o backend
      await new Promise((res) => setTimeout(res, 2000));
      setIngredients(['Tomate', 'Cebolla', 'Perejil', 'Pollo']);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View
        style={[
          styles.container,
          { backgroundColor: paletteColors.background },
        ]}
      >
        <Text>Modal</Text>

        <Button
          icon
          iconName="close"
          width={50}
          height={50}
          rounded={50}
          onPress={() => router.back()}
          bgColor={paletteColors.primary.DEFAULT}
          color="white"
        />

        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width: '100%', height: 500, borderRadius: 10 }}
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: 250,
              backgroundColor: 'gray',
              borderRadius: 10,
            }}
          />
        )}

        <Button
          marginTop={5}
          icon
          iconName="cloud"
          rounded={10}
          paddingX={5}
          paddingY={10}
          text="detectar ingredientes"
          bgColor={paletteColors.primary.DEFAULT}
          color="white"
          onPress={handleDetectIngredients}
        />

        {loading && (
          <ActivityIndicator
            size="large"
            color="#FF7043"
            style={{ marginTop: 10 }}
          />
        )}

        {ingredients.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Ingredientes detectados:</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tagsContainer}
            >
              {ingredients.map((ing, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{ing}</Text>
                </View>
              ))}
            </ScrollView>

            {/* Botón para generar recetas */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#388E3C' }]}
              onPress={() => console.log('generar recetas')}
            >
              <Text style={styles.buttonText}>Generar recetas</Text>
            </TouchableOpacity>
          </>
        )}
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
    padding: 10,
  },
  button: {
    backgroundColor: '#FF7043',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { marginTop: 20, fontWeight: 'bold', fontSize: 18 },
  tagsContainer: { flexDirection: 'row', marginTop: 10 },
  tag: {
    backgroundColor: '#FFECB3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
  },
  tagText: { color: '#5D4037', fontWeight: '600' },
});

export default Modal;
