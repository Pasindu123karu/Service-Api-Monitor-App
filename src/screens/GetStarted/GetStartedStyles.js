import { StyleSheet } from 'react-native';
import fontSizes from '../../styles/fontSizes';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    gradientBackground: {
      height: 400,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      marginTop: 40,
    },
    logo: {
      marginTop: 40,
      marginLeft: 30,
      width: 320,
      height: 120,
    },
    signupButton: {
      marginTop: 70,
      marginLeft: 90,
      backgroundColor: '#0078D7',
      paddingVertical: 15,
      borderRadius: 40,
      height: 60,
      width: 200,
      alignItems: 'center',
      marginVertical: 15,
    },
    signupButtonText: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
  
    },
  });
  
  export default styles;