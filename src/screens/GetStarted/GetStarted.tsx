import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp } from '@react-navigation/native';
import styles from './GetStartedStyles';  

type GetStartedProps = {
  navigation: NavigationProp<any>;
};

const GetStarted: React.FC<GetStartedProps> = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#001B27" barStyle="light-content" />
      {/* Gradient Background */}
      <LinearGradient
        colors={['#001B27', '#0078D7']}
        style={styles.gradientBackground}>
        
      </LinearGradient>
      {/* Logo Image */}
      <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/sltl002_logo_1.png')}
            style={styles.logo}
          />
        </View>
 
      {/* Get Start Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.signupButtonText}>Get Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;
