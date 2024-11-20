import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
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
    dropdownContainer: { // Stílus a konténerhez
      width: 200,
    },
    dropdownText: {
      fontSize: 18,
    },
  
  
  });