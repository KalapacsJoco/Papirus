import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Görgethető sáv */}
      <ScrollView horizontal contentContainerStyle={styles.navbar} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Works')}>
          <Text style={styles.menuButtonText}>Melók</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Doctor')}>
          <Text style={styles.menuButtonText}>Orvosok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.menuButtonText}>Fizetés ellenőrzés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Fees')}>
          <Text style={styles.menuButtonText}>Tagbérek</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Statistics')}>
          <Text style={styles.menuButtonText}>Statisztika</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="pluscircleo" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  navbar: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Több sorba törés, ha nem fér el
    justifyContent: 'space-around', // Gombok közötti hely igazítása
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menuButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e0f2f7',
    borderRadius: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  menuButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
