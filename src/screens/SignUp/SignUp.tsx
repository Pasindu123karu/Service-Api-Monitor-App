import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp } from '@react-navigation/native';
import styles from './SignUpStyles'; // Import external styles

type SignUpProps = {
  navigation: NavigationProp<any>;
};

const SignUpScreen: React.FC<SignUpProps> = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      setAlertMessage('Please fill in all fields.');
      setAlertVisible(true);
    } else {
      setAlertMessage('Sign up successful!');
      setAlertVisible(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Top Header */}
      <ScrollView>
        {/* Gradient Background */}
        <LinearGradient
          colors={['#001B27', '#0078D7']}
          style={styles.gradientBackground}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.headerText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.activeTabWrapper}>
                <Text style={[styles.headerText, styles.activeTab]}>Sign Up</Text>
                <View style={styles.underline} />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Main Content */}
        <View style={styles.main}>
          <Text style={styles.title}>Create An Account</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/images/fi-br-portrait.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#aaa"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/images/fi-br-envelope.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/images/fi-br-lock.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!isPasswordVisible)}>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Remember & Forgot Password */}
          <View style={styles.passwordOptions}>
            <View style={styles.row}>
              <TouchableOpacity>
                <Text style={styles.checkbox}>☐</Text>
              </TouchableOpacity>
              <Text style={styles.rememberText}>Remember Password</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Social Sign-In Options */}
          <Text style={styles.orText}>Or sign up with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/google.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/facebook.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Custom Alert Modal */}
      <Modal
        transparent
        visible={isAlertVisible}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{alertMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setAlertVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default SignUpScreen;
