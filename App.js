import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './components/Navbar';
import { StyleSheet } from 'react-native';


// Import screens
import WorksPage from './screens/WorksPage';
import PaymentPage from './screens/PaymentPage';
import DoctorScreen from './screens/DoctorScreen';
import FeesScreen from './screens/FeesScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Render NavBar at the top */}
      <NavBar />
      <Stack.Navigator initialRouteName="Works">
        <Stack.Screen name="Works" component={WorksPage} />
        <Stack.Screen name="Payment" component={PaymentPage} />
        <Stack.Screen name="Doctor" component={DoctorScreen} />
        <Stack.Screen name="Fees" component={FeesScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Stílusok
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: 0,
  },
  dropdownContainer: {
    width: 200,
  },
  dropdownText: {
    fontSize: 18,
  },
});